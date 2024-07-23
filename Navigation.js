// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Welcome from './src/Screens/Welcome'
// import SignInScreen from './src/Screens/SignInScreen';
// import SignUpScreen from './src/Screens/SignUpScreen';
// import ConfirmEmail from './src/Screens/ConfirmEmail';
// import ConfirmPassword from './src/Screens/ConfirmPassword';
// import ForgotPassword from './src/Screens/ForgotPassword';
// import NewPasswordScreen from './src/Screens/NewPasswordScreen';
// import HomeScreen from './src/Screens/HomeScreen';
// import DrawerNavigation from './src/Screens/DrawerNavigation';
// import Header from './src/Components/Header';
// import InfoCenter from './src/Screens/InfoCenter';
// import Payments from './src/Screens/Payments';
// import Reports from './src/Screens/Reports';
// import Maintenance from './src/Screens/Maintenance';
// import Properties from './src/Screens/Properties';



// const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

// const Navigation = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Welcome"  screenOptions={{headerShown: false}}>
//        <Stack.Screen name='Welcome' component={Welcome}/>
//        <Stack.Screen name='SignIn' component={SignInScreen}/>
//        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} options={{ headerShown: false }} />
//        <Stack.Screen name='SignUp' component={SignUpScreen}/>
//        <Stack.Screen name='ForgotPassword' component={ForgotPassword}/>
//        <Stack.Screen name='NewPasswordScreen' component={NewPasswordScreen}/>
//        <Stack.Screen name='confirm' component={ConfirmEmail}/>
//        <Stack.Screen name='confirmPass' component={ConfirmPassword}/>
//        <Stack.Screen name='Home' component={HomeScreen}/>
//        <Stack.Screen name='Header' component={Header}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };


// const CustormDrawer = () => {
  
//     return (
//       <Drawer.Navigator drawerContent={(props) => <DrawerNavigation {...props} />}>
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="InfoCenter" component={InfoCenter} />
//         <Drawer.Screen name="Payments" component={Payments} />
//         <Drawer.Screen name="Reports" component={Reports} />
//         <Drawer.Screen name="Maintenance" component={Maintenance} />
//         <Drawer.Screen name="Properties" component={Properties} />
//       </Drawer.Navigator>
//     );
    
// }

// export default Navigation;
