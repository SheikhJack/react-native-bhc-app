import {
  View,
  Image,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  ScrollView,
} from 'react-native';
import Logo from '../../assets/bhc/bhc.png';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const SignInScreen = () => {
  const [loading, SetLoading] = useState();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSignInPressed = async (data) => {
    if (loading) {
      return;
    }
    SetLoading(true);
    try {
      const response = await Auth.signIn(data.username, data.password);
    } catch (error) {
      Alert.alert('Oop', error.message);
    }

    SetLoading(false);
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };
  const onGoogleSignInPressed = () => {
    console.warn('Enter New Password');
  };
  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />

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
          name="password"
          rules={{
            required: 'Password is required',
            minLength: {
              value: 5,
              message: 'Password should be minimum 5 characters long',
            },
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
                placeholder="Password"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry
                style={styles.input}
              />
              {errors.password && (
                <Text style={styles.errorText}>{errors.password.message}</Text>
              )}
            </View>
          )}
        />

        <Pressable
          onPress={handleSubmit(onSignInPressed)}
          style={styles.contain}
        >
          <Text style={styles.text}>LOGIN</Text>
        </Pressable>
        <Pressable onPress={onForgotPasswordPressed} style={styles.containe}>
          <Text style={styles.text}>Forgot Password</Text>
        </Pressable>
        <Pressable onPress={onGoogleSignInPressed} style={styles.contain}>
          <Text style={styles.text}>Google SignIn</Text>
        </Pressable>
        <Pressable onPress={onSignUpPressed} style={styles.containing}>
          <Text style={styles.textColor}>Create Account</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 15,
    marginTop: 60,
  },
  contain: {
    backgroundColor: '#985008',
    height: 40,
    borderRadius: 20,
    width: '100%',
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 1,
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
    color: 'Black',
  },
  logo: {
    height: 280,
    width: 280,
    // width: '60%',
    // height: 100,
    maxWidth: 300,
    maxHeight: 100,
  },
  input: {
    margin: 5,
  },

  textInput: {
    backgroundColor: 'white',
    width: '100%',
    height: 40,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
    marginBottom: 2,
  },
});

export default SignInScreen;
