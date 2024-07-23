import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Picker } from 'react-native';
import sanityClient from '../../Sanity';

const Reports = () => {
  const [payments, setPayments] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const fetchPayments = async () => {
    const startDate = new Date(selectedYear, selectedMonth - 1, 1).toISOString();
    const endDate = new Date(selectedYear, selectedMonth, 0).toISOString();

    const data = await sanityClient.fetch(`
      *[_type == "payment" && date >= $startDate && date <= $endDate] {
        _id,
        amount,
        date,
        type,
        property->{
          name,
          address
        },
        user->{
          name,
          email
        }
      }
    `, { startDate, endDate });

    setPayments(data);
  };

  useEffect(() => {
    fetchPayments();
  }, [selectedMonth, selectedYear]);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.property}>{item.property.name} - {item.property.address}</Text>
      <Text style={styles.amount}>Amount: ${item.amount}</Text>
      <Text style={styles.date}>Date: {new Date(item.date).toLocaleDateString()}</Text>
      <Text style={styles.type}>Type: {item.type}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generate Monthly Statement</Text>
      <Picker
        selectedValue={selectedMonth}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedMonth(itemValue)}
      >
        {Array.from({ length: 12 }, (_, i) => i + 1).map(month => (
          <Picker.Item key={month} label={`Month ${month}`} value={month} />
        ))}
      </Picker>
      <Picker
        selectedValue={selectedYear}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedYear(itemValue)}
      >
        {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map(year => (
          <Picker.Item key={year} label={`${year}`} value={year} />
        ))}
      </Picker>
      <Button title="Generate Report" onPress={fetchPayments} />
      <FlatList
        data={payments}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  list: {
    marginTop: 16,
  },
  card: {
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  property: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 16,
    marginTop: 4,
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  type: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default Reports;
