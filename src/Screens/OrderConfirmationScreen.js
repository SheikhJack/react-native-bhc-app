import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const OrderConfirmationScreen = ({ navigation }) => {
  const handleGoHome = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Thank you for your order!</Text>
      <Button title="Go to Home" onPress={handleGoHome} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 20,
  }
});

export default OrderConfirmationScreen;
