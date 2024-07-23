import {
  View,
  Image,
  useWindowDimensions,
  StyleSheet,
  TextInput,
  Text,
  Pressable,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { Auth } from 'aws-amplify';

const SignUpScreen = () => {
  const [loading, SetLoading] = useState();
  const navigation = useNavigation();
  const pwd = watch('password');

  const {
    control,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onRegisterPressed = async (data) => {
    const { username, password, email, name } = data;
    if (loading) {
      return;
    }
    SetLoading(true);
    try {
      const response = await Auth.SignUp({
        username,
        password,
        attributes: { email, name, preferred_username: username },
      });
      navigation.navigate('confirm', { username });
    } catch (error) {}
  };
  const onTermsPressed = () => {
    console.warn('Enter New Password');
  };

  const onPolicyPressed = () => {
    console.warn('Enter New Password');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  const onGoogleSignInPressed = () => {};

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.create}>Create Account</Text>

        <Controller
          control={control}
          name="name"
          rules={{
            required: 'name is required',
            message: 'Name should be atleast 5 characters',
          }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <View
              style={[styles.input, { borderColor: error ? 'red' : 'grey' }]}
            >
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Name"
                style={styles.textInput}
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email.message}</Text>
              )}
            </View>
          )}
        />

        <Controller
          control={control}
          name="email"
          rules={{
            required: 'Email is required',
            message: 'Email should be atleast 5 characters',
          }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <View
              style={[styles.input, { borderColor: error ? 'red' : 'grey' }]}
            >
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Email"
                style={styles.textInput}
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email.message}</Text>
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
              style={[styles.input, { borderColor: error ? 'red' : 'grey' }]}
            >
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder="Password"
                secureTextEntry={true}
                style={styles.textInput}
              />
              {errors.password && (
                <Text style={styles.errorText}>{errors.password.message}</Text>
              )}
            </View>
          )}
        />

        <Controller
          control={control}
          name="passwordRepeat"
          rules={{
            required: 'Password repeat is required',
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
              style={[styles.input, { borderColor: error ? 'red' : 'grey' }]}
            >
              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry={true}
                placeholder="Repeat Password"
                style={styles.textInput}
              />
              {errors.passwordRepeat && (
                <Text style={styles.errorText}>
                  {errors.passwordRepeat.message}
                </Text>
              )}
            </View>
          )}
        />

        <Pressable
          onPress={handleSubmit(onRegisterPressed)}
          style={styles.contain}
        >
          <Text style={styles.text}>Register</Text>
        </Pressable>
        <Text style={styles.link}>
          By Registering, you confirm that you accept our{''}{' '}
          <Text style={styles.terms} onPress={onTermsPressed}>
            Terms of Use
          </Text>{' '}
          and {''}
          <Text style={styles.terms} onPress={onPolicyPressed}>
            Privacy Policy
          </Text>
        </Text>
        <Pressable onPress={onGoogleSignInPressed} style={styles.contain}>
          <Text style={styles.text}>Google SignIn</Text>
        </Pressable>
        <Pressable onPress={onSignInPressed} style={styles.containing}>
          <Text style={styles.textColor}>Have an account? SignIn</Text>
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
  },
  link: {
    color: 'grey',
    marginVertical: 10,
  },
  terms: {
    color: '#FDB075',
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
  containe: {
    backgroundColor: 'grey',
    width: '100%',
    height: 40,
    marginVertical: 5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  create: {
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 100,
    marginBottom: 35,
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
  errorText: {
    color: 'red',
    marginBottom: 3,
  },

  input: {
    backgroundColor: 'white',
    width: '100%',
    height: 35,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 5,
  },

  textInput: {
    width: '100%',
    marginBottom: 4,
  },
});

export default SignUpScreen;
