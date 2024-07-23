import React from 'react';
import { View, Button, Alert, Pressable, Text } from 'react-native';
import { useStripe } from '@stripe/stripe-react-native';
import { StyleSheet } from 'react-native';

const PaymentScreen = () => {
  const { initPaymentSheet, presentPaymentSheet } = useStripe();

  const handlePayment = async () => {
    // Fetch payment intent from your server
    const response = await fetch(
      'https://your-server.com/create-payment-intent'
    );
    const { clientSecret } = await response.json();

    const { error } = await initPaymentSheet({
      paymentIntentClientSecret: clientSecret,
    });

    if (!error) {
      const { error: paymentError } = await presentPaymentSheet();

      if (paymentError) {
        Alert.alert('Payment failed', paymentError.message);
      } else {
        Alert.alert('Payment successful', 'Your order is confirmed');
      }
    }
  };

  return (
    <View style={styles.Viewbutton}>
      <Pressable onPress={handlePayment} style={styles.button}>
        <Text style={{color: 'white'}}>Pay</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  Viewbutton: {
    margin:15,
    marginTop:'60%',
    alignItems:"center",

justifyContent:'center'  
},
  button: {
    backgroundColor: '#985008',
    height: 40,
    width: '100%',
    borderRadius: 20,
    alignItems: 'center',
    color: 'white',
    justifyContent: 'center',
    
  },
});

export default PaymentScreen;
