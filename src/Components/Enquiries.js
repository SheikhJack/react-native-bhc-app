import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Button, SafeAreaView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { CheckBox } from 'react-native-elements';


const Enquiries = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  const isRenting = watch('isRenting', false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.label}>Full Name *</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="fullName"
        />
        {errors.fullName && <Text style={styles.error}>This is required.</Text>}

        <Text style={styles.label}>Current Address</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="currentAddress"
        />

        <Text style={styles.label}>Telephone</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="telephone"
        />

        <Text style={styles.label}>Mobile</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="mobile"
        />

        <Text style={styles.label}>Email *</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="email"
        />
        {errors.email && <Text style={styles.error}>This is required.</Text>}

        <Text style={styles.label}>Are you currently renting? *</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <View style={styles.checkboxContainer}>
              <CheckBox
                title="Yes"
                checked={value === 'yes'}
                onPress={() => onChange('yes')}
                containerStyle={styles.checkbox}
              />
              <CheckBox
                title="No"
                checked={value === 'no'}
                onPress={() => onChange('no')}
                containerStyle={styles.checkbox}
              />
            </View>
          )}
          name="isRenting"
        />
        {errors.isRenting && (
          <Text style={styles.error}>This is required.</Text>
        )}

        {isRenting === 'yes' && (
          <>
            <Text style={styles.label}>
              If yes, when is the lease expiring? *
            </Text>
            {/* <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <View>
                  <DateTimePicker
                    value={value || new Date()}
                    mode="date"
                    display="default"
                    onChange={(event, date) => onChange(date)}
                  />
                </View>
              )}
              name="leaseExpiry"
            /> */}
          </>
        )}

        {/* <Text style={styles.label}>Date Property Required *</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <View>
              <DateTimePicker
                value={value || new Date()}
                mode="date"
                display="default"
                onChange={(event, date) => onChange(date)}
              />
            </View>
          )}
          name="propertyRequired"
        /> */}

        <Text style={styles.label}>
          Maximum amount of rent you wish to pay? *
        </Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
          name="maxRent"
        />
        {errors.maxRent && <Text style={styles.error}>This is required.</Text>}

        <Text style={styles.label}>
          How many people will reside at the premises? *
        </Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
          name="residents"
        />
        {errors.residents && (
          <Text style={styles.error}>This is required.</Text>
        )}

        <Text style={styles.label}>Type of Property *</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <View style={styles.checkboxContainer}>
              <CheckBox
                title="House"
                checked={value === 'House'}
                onPress={() => onChange('House')}
                containerStyle={styles.checkbox}
              />
              <CheckBox
                title="Townhouse"
                checked={value === 'Townhouse'}
                onPress={() => onChange('Townhouse')}
                containerStyle={styles.checkbox}
              />
              <CheckBox
                title="Flat"
                checked={value === 'Flat'}
                onPress={() => onChange('Flat')}
                containerStyle={styles.checkbox}
              />
            </View>
          )}
          name="propertyType"
        />
        {errors.propertyType && (
          <Text style={styles.error}>This is required.</Text>
        )}

        <Text style={styles.label}>Number of Bedrooms *</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
          name="bedrooms"
        />
        {errors.bedrooms && <Text style={styles.error}>This is required.</Text>}

        <Text style={styles.label}>Number of Bathrooms *</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
          name="bathrooms"
        />
        {errors.bathrooms && (
          <Text style={styles.error}>This is required.</Text>
        )}

        <Text style={styles.label}>Number of Garages *</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
          name="garages"
        />
        {errors.garages && <Text style={styles.error}>This is required.</Text>}

        <Text style={styles.label}>Number of Carports *</Text>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
          name="carports"
        />
        {errors.carports && <Text style={styles.error}>This is required.</Text>}

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f2f2f2',
  },
  form: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
});

export default Enquiries;
