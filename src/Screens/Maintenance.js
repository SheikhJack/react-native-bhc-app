import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

const Maintenance = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    // Handle form submission, e.g., send data to your backend
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Maintenance Request Form</Text>

      <Text style={styles.label}>Full Name *</Text>
      <Controller
        control={control}
        rules={{ required: 'Full Name is required' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.fullName && styles.errorInput]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="fullName"
      />
      {errors.fullName && <Text style={styles.errorText}>{errors.fullName.message}</Text>}

      <Text style={styles.label}>Address *</Text>
      <Controller
        control={control}
        rules={{ required: 'Address is required' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.address && styles.errorInput]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="address"
      />
      {errors.address && <Text style={styles.errorText}>{errors.address.message}</Text>}

      <Text style={styles.label}>Phone Number *</Text>
      <Controller
        control={control}
        rules={{ required: 'Phone Number is required', pattern: { value: /^[0-9]+$/, message: 'Invalid phone number' } }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.phoneNumber && styles.errorInput]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="phone-pad"
          />
        )}
        name="phoneNumber"
      />
      {errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber.message}</Text>}

      <Text style={styles.label}>Email *</Text>
      <Controller
        control={control}
        rules={{ required: 'Email is required', pattern: { value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: 'Invalid email address' } }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.email && styles.errorInput]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            keyboardType="email-address"
          />
        )}
        name="email"
      />
      {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

      <Text style={styles.label}>Description of Issue *</Text>
      <Controller
        control={control}
        rules={{ required: 'Description is required' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors.description && styles.errorInput]}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            multiline
            numberOfLines={4}
          />
        )}
        name="description"
      />
      {errors.description && <Text style={styles.errorText}>{errors.description.message}</Text>}

      <Button title="Submit Request" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Maintenance;
