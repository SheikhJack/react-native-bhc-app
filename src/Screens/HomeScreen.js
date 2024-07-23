import {
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import React, { useEffect,useState } from 'react';
import Categories from '../Components/Categories';
import FeaturedRow from '../Components/FeaturedRow';
import { getPropertyCategory } from '../../api';

const HomeScreen = () => {

  const [propertyCategory, setPropertyCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPropertyCategory()
      .then(data => {
        console.log('data', data);
        setPropertyCategory(data);
      })
      .catch(error => {
        console.error('Error fetching property categories:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }




  return (
    <ScrollView
      vertical
      showsHorizontalScrollIndicator={false}
      style={styles.ScrollView}
    >
        <View style={styles.container}>
          {/* categories */}
          <Categories />

          {/* featured */}
          <View style={styles.featured}>
            {propertyCategory.map((item, index) => {
              return (
                <FeaturedRow
                  key={index}
                  title={item.title}
                  houses={item.houses}
                  description={item.description}
                />
              );
            })}
          </View>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 2,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'space-evenly',
    marginHorizontal: 2,
    backgroundColor: '#FFFFFF',
  },
  featured: {
    marginBottom: 3,
    marginTop: 25
  },
});

export default HomeScreen;
