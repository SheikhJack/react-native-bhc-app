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
import { Auth } from 'aws-amplify';
import { Controller, useForm } from 'react-hook-form';


  
  const NewPasswordScreen = () => {

    const navigation = useNavigation()


    const [newPassword, setNewPassword] = useState('');
    const [code, setCode] = useState('');
    const {
      control,
      watch,
      handleSubmit,
      formState: { errors },
    } = useForm({ defaultValues: { username: route?.params?.username } });
    


  
    const onSubmitPressed = async () => {
      try {
        await Auth.forgotPassword(data.username,data.code, data.password);
        navigation.navigate('SignIn');
      } catch (error) {
        Arlet.arlet(error.message);
      }
      navigation.navigate('Home')
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
          
        <Controller
          control={control}
          name="username"
          rules={{
            required: 'Username is required',
            minLength: 5,
            message: 'Name should be atleast 5 characters',
          }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <View
              style={[
                styles.textInput,
                { borderColor: error ? 'red' : 'grey' },
              ]}
            >
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Username"
                style={styles.input}
              />
              {errors.username && (
                <Text style={styles.errorText}>{errors.username.message}</Text>
              )}
            </View>
          )}
        />


          
        <Controller
          control={control}
          name="Code"
          rules={{
            required: 'Code is required',
            minLength: 5,
            message: 'Name should be atleast 5 characters'
          }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <View
              style={[
                styles.textInput,
                { borderColor: error ? 'red' : 'grey' },
              ]}
            >
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Code"
                style={styles.input}
              />
              {errors.username && (
                <Text style={styles.errorText}>{errors.username.message}</Text>
              )}
            </View>
          )}
        />

        
<Controller
          control={control}
          name="NewPassword"
          rules={{
            required: 'NewPassword is required',
            minLength: 5,
          }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <View
              style={[
                styles.textInput,
                { borderColor: error ? 'red' : 'grey' },
              ]}
            >
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="NewPassword"
                style={styles.input}
              />
              {errors.username && (
                <Text style={styles.errorText}>{errors.username.message}</Text>
              )}
            </View>
          )}
        />
        
          
          <Pressable onPress={onSubmitPressed} style={styles.contain}>
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
      marginTop: 100,
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
    contain2: {
      color: 'grey',
      borderColor: '#985008',
      borderWidth: 2,
      height: 40,
      borderRadius: 20,
      width: '100%',
      marginVertical: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    containe: {
      backgroundColor: 'grey',
      width: '100%',
      height: 40,
      marginVertical: 5,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    create:{
      fontWeight: 'bold',
      fontSize: 25,
      margin: 30,
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
    text2: {
      fontWeight: 'bold',
      color: 'black',
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
  
  export default NewPasswordScreen;