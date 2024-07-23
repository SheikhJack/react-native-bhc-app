import { View, Text, ScrollView, TouchableOpacity, Image,StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getHouses, getPropertyCategory } from '../../api'
import { urlFor } from '../../Sanity';

const Categories = () => {
  const [activeCategory,setActiveCategory] = useState(null);
  const [Categories, setCategories] = useState([])
  const [houses, setHouses ] = useState([])

  useEffect(()=>{
    getHouses().then(data=>{
      setHouses(data)
    })

  },[])


  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.ScrollView }
      >
        {houses.map((house, index) => (
         
          <View
            style={styles.categoryContainer}
            key={index}
          >
            <TouchableOpacity style={styles.button}
            onPress={()=> setActiveCategory(house._id)}
             >
              <Image
                style={{ height: 55, width: 55, borderRadius: 22.5 }}
                source={{uri: urlFor(house.imageUrl).url()}}
              />
            </TouchableOpacity>
            <Text style={styles.text}>
              {house.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    marginHorizontal: 2,
    backgroundColor: '#FFFFFF',
  },
  ScrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 10,
    gap: 7,

  },
  text:{ 
    textAlign: 'center',
    marginTop: 4,
    fontSize: 15,
    fontWeight: 'bold',
  },
  categoryContainer:{
    flex: 1,
    alignItems: 'center',
    marginRight: 18,
    
  },
  button: { 
    padding: 1 ,
    marginRight: 15,
  }
});

export default Categories;
