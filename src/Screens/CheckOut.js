import React, { useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { CartContext } from '../Context/CartContext';

const CheckoutScreen = ({ navigation }) => {
  const { cartItems } = useContext(CartContext);

  const handlePayment = () => {
    // Process the payment and navigate to confirmation screen
    navigation.navigate('OrderConfirmationScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Review your order:</Text>
      {cartItems.map(item => (
        <View key={item.id} style={styles.item}>
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
        </View>
      ))}
      <Button title="Confirm and Pay" onPress={handlePayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
    padding: 20,
  },
  item: {
    marginBottom: 10,
  },
  text: {
    marginBottom: 20,
  }
});

export default CheckoutScreen;
