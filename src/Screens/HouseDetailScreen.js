// src/screens/HouseDetail.js

import React,{ useContext } from 'react';
import { View, Text, Image, StyleSheet, Button, Alert } from 'react-native';
import { CartContext } from '../Context/CartContext';

const HouseDetail = ({ route, navigation }) => {
  const { house } = route.params;
  const { addToCart } = useContext(CartContext);


  const handleAddToCart = () => {
    addToCart(house);
    Alert.alert('Success', 'House added to cart!');
  };

  const handleCheckout = () => {
    addToCart(house);
    navigation.navigate('Checkout');
  };

  return (
    <View style={styles.container}>
      <Image source={house.image} style={styles.image} />
      <Text style={styles.name}>{house.name}</Text>
      <Text style={styles.description}>{house.description}</Text>
      <Text style={styles.price}>Price: {house.price}</Text>
      <Text style={styles.address}>Address: {house.address}</Text>
      <Text style={styles.reviews}>Reviews: {house.reviews}</Text>
      <Text style={styles.category}>Category: {house.category}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Add to Cart" onPress={handleAddToCart} />
        <Button title="Checkout" onPress={handleCheckout} color="#841584" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '900',
  },
  price: {
    fontSize: 18,
    marginBottom: 10,

  },
  address: {
    fontSize: 16,
    marginBottom: 10,
  },
  reviews: {
    fontSize: 16,
    marginBottom: 10,
  },
  category: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default HouseDetail;

