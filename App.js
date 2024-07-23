import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import {
  NavigationContainer,
  DrawerActions,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { CartProvider } from './src/Context/CartContext';
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
import Welcome from './src/Screens/Welcome';
import SignInScreen from './src/Screens/SignInScreen';
import SignUpScreen from './src/Screens/SignUpScreen';
import ConfirmEmail from './src/Screens/ConfirmEmail';
import ConfirmPassword from './src/Screens/ConfirmPassword';
import ForgotPassword from './src/Screens/ForgotPassword';
import NewPasswordScreen from './src/Screens/NewPasswordScreen';
import HomeScreen from './src/Screens/HomeScreen';
import InfoCenter from './src/Screens/InfoCenter';
import Reports from './src/Screens/Reports';
import Maintenance from './src/Screens/Maintenance';
import Properties from './src/Screens/Properties';
import LogOut from './src/Screens/LogOut';
import HouseDetailScreen from './src/Screens/HouseDetailScreen';
import CartScreen from './src/Screens/CartScreen';
import CheckoutScreen from './src/Screens/CheckOut';
import OrderConfirmationScreen from './src/Screens/OrderConfirmationScreen';
import PaymentScreen from './src/Screens/PaymentScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
Amplify.confiqure(config);

const Home = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'white',
          width: 250,
        },
        headerStyle: {
          backgroundColor: 'white',
        },
        headerShown: true,
        drawerLabelStyle: {
          color: '#120202',
          fontSize: 14,
          marginLeft: -10,
        },
      }}
    >
      <Drawer.Screen
        name="Main"
        options={{
          drawerLabel: 'Home',
          title: 'Main',
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="home-outline" size={24} color="black" />
          ),
        }}
        component={HomeScreen}
      />
      <Drawer.Screen
        name="InfoCenter"
        options={{
          drawerLabel: 'Information Center',
          title: 'InfoCenter',
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="stats-chart-outline" size={24} color="black" />
          ),
        }}
        component={InfoCenter}
      />
      <Drawer.Screen
        name="Properties"
        options={{
          drawerLabel: 'Properties',
          title: 'Properties',
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="business-outline" size={24} color="black" />
          ),
        }}
        component={Properties}
      />
      <Drawer.Screen
        name="Payments"
        options={{
          drawerLabel: 'Payments',
          title: 'Payments',
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="card-outline" size={24} color="black" />
          ),
        }}
        component={PaymentScreen}
      />
      <Drawer.Screen
        name="Maintenance"
        options={{
          drawerLabel: 'Maintenance',
          title: 'Maintenance',
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="construct-outline" size={24} color="black" />
          ),
        }}
        component={Maintenance}
      />
      <Drawer.Screen
        name="Reports"
        options={{
          drawerLabel: 'Reports',
          title: 'Reports',
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="document-attach-outline" size={24} color="black" />
          ),
        }}
        component={Reports}
      />
      <Drawer.Screen
        name="LogOut"
        options={{
          drawerLabel: 'LogOut',
          title: 'LogOut',
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="exit-outline" size={24} color="black" />
          ),
        }}
        component={LogOut}
      />
      <Drawer.Screen
        name="Cart"
        options={{
          drawerLabel: 'Cart',
          title: 'Cart',
          headerShadowVisible: false,
          drawerIcon: () => (
            <Ionicons name="cart-outline" size={24} color="black" />
          ),
        }}
        component={CartScreen}
      />
    </Drawer.Navigator>
  );
};

const Navigator = () => {
  const navigation = useNavigation();

  return (
    <CartProvider>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: true,
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          color="white"
          component={Home}
          options={{
            headerLeft: () => {
              return (
                <Ionicons
                  name="menu-outline"
                  size={30}
                  color="black"
                  onPress={() =>
                    navigation.dispatch(DrawerActions.openDrawer())
                  }
                  style={{ marginLeft: 20, marginRight: 45 }}
                />
              );
            },
          }}
        />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="NewPasswordScreen" component={NewPasswordScreen} />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
        <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} />
        <Stack.Screen
          name="HouseDetailScreen"
          component={HouseDetailScreen}
          screenOptions={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          screenOptions={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CheckOut"
          component={CheckoutScreen}
          screenOptions={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OrderConfirmationScreen"
          component={OrderConfirmationScreen}
          screenOptions={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PaymentScreen"
          component={PaymentScreen}
          screenOptions={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </CartProvider>
  );
};

export default function App() {
  return (
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
