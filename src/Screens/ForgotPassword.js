import {
    View,
    StyleSheet,
    TextInput,
    Text,
    Pressable,
    ScrollView,
  } from 'react-native';
  import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


  
  const ForgotPassword = () => {

    const navigation = useNavigation();


    const [username, setUsername] = useState('');
    
  
    const onSendPressed = () => {
      navigation.navigate('NewPasswordScreen')
    };
    const onResendPressed = () => {
      console.warn('Enter New Password');
    };
    const onSignInPressed = () => {
      navigation.navigate('SignIn')
    };
   
  
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.create} >Reset Your Password</Text>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
          />
          
          <Pressable onPress={onSendPressed} style={styles.contain}>
            <Text style={styles.text}>Send</Text>
          </Pressable>
          

          
          <Pressable onPress={onSignInPressed} style={styles.containing}>
            <Text style={styles.textColor}>Back To SignIn</Text>
          </Pressable>
        </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 100 ,
      gap: 10,
      padding: 15,
    },
     
    contain: {
      backgroundColor: '#985008',
      height: 40,
      borderRadius: 20,
      width: '100%',
      marginVertical: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    
    create:{
      fontWeight: 'bold',
      fontSize: 25,
      margin: 35,
    },
    containing: {
      backgroundColor: '#e3e3e3',
      width: '100%',
      height: 40,
      marginVertical: 5,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    text: {
      fontWeight: 'bold',
      color: 'white',
    },
    
    textColor: {
      fontWeight: 'bold',
      color: 'black',
    },
   
    input: {
      backgroundColor: 'white',
      width: '100%',
      height: 40,
      borderColor: '#e8e8e8',
      borderWidth: 1,
      borderRadius: 20,
      paddingHorizontal: 10,
      marginVertical: 5,
    },
  
  });
  
  export default ForgotPassword;