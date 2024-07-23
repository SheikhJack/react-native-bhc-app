import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import { sanityClient } from '../../Sanity';

const Tab = createMaterialTopTabNavigator();

const PropertyItem = ({ item }) => {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity 
      style={styles.propertyItem} 
      onPress={() => navigation.navigate('HouseDetailScreen', { house: item })}
    >
      <Image source={{ uri: item.imageUrl }} style={styles.propertyImage} />
      <View style={styles.propertyDetails}>
        <Text style={styles.propertyTitle}>{item.name}</Text>
        <Text style={styles.propertyDescription}>{item.description}</Text>
        <Text style={styles.propertyPrice}>Price: {item.price}</Text>
        <Text style={styles.propertyAddress}>{item.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

const ForRent = ({ properties }) => {
  const rentProperties = properties.filter(house => house.category === "forRent");
  return (
    <FlatList
      data={rentProperties}
      renderItem={({ item }) => <PropertyItem item={item} />}
      keyExtractor={(item) => item._id}
      contentContainerStyle={styles.propertyList}
    />
  );
};

const ForSale = ({ properties }) => {
  const saleProperties = properties.filter(house => house.category === "forSale");
  return (
    <FlatList
      data={saleProperties}
      renderItem={({ item }) => <PropertyItem item={item} />}
      keyExtractor={(item) => item._id}
      contentContainerStyle={styles.propertyList}
    />
  );
};

const Properties = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await sanityClient.fetch(
          `*[_type == "property"]{
            _id,
            name,
            description,
            category,
            price,
            address,
            lat,
            lng,
            stars,
            reviews,
            "imageUrl": image.asset->url
          }`
        );
        setProperties(data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen name="For Rent">
        {() => <ForRent properties={properties} />}
      </Tab.Screen>
      <Tab.Screen name="For Sale">
        {() => <ForSale properties={properties} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  propertyList: {
    padding: 10,
  },
  propertyItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  propertyImage: {
    width: 100,
    height: 100,
    margin: 10
  },
  propertyDetails: {
    flex: 1,
    padding: 10,
  },
  propertyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  propertyDescription: {
    color: '#666',
    marginVertical: 5,
  },
  propertyPrice: {
    fontSize: 16,
    color: '#000',
  },
  propertyAddress: {
    fontSize: 14,
    color: '#777',
  },
});

export default Properties;
