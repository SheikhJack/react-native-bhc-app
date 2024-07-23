import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';



function Welcome() {

  const  navigation  = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.homeContainer}>
        <ImageBackground
          source={require('../../assets/bhc/bhc.png')}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.titles}>
          <View style={styles.container1}>
            <Pressable
              style={styles.button}
              onPress={() => {
                navigation.navigate('SignIn');
              }}
            >
              <Text style={styles.texts}>LOGIN</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => {
                navigation.navigate('SignUp');
              }}
            >
              <Text style={styles.texts}>SIGNUP</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titles: {
    marginTop: '20%',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '500',
    //color: "#5c5e62"
  },
  image: {
    height: 240,
    width: 280,
    padding: 5,
    overflow: 'hidden',
  },
  container1: {
    width: '100%',
    padding: 10,
    gap: 20,
  },
  button: {
    backgroundColor: '#985008',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texts: {
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
  },
});

export default Welcome;
