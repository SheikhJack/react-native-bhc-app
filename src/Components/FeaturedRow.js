import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import HousesCard from './HousesCard';

const FeaturedRow = ({ title, description, houses }) => {
  return (
    <View>
      <View style={styles.FeaturedRow}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        style={styles.scroll}
      >
        {houses.map((house, index) => {
          return <HousesCard key={index} item={house} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  FeaturedRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
  },
  title: {
    fontSize: 25,
    fontWeight: '500',
  },
  text: {
    color: 'grey',
    fontSize: 10,
  },
  seeAll: {
    color: 'light-brown',
  },
  scroll: {
    overflow: 'visible',
    padding: 5,
  },
});

export default FeaturedRow;
