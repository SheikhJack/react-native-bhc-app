import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../../Sanity'

const HousesCard = ({item}) => {
  return (
    <TouchableOpacity>
        <View style={styles.card}>
            <Image style={styles.image}  source={{uri: urlFor(item.image).url()}}/>
            <View style={styles.name} >
                <Text style={styles.textName}>{item.name}</Text>
                <View style={styles.star}>
                    <Image style={styles.starImage} source={require('../../assets/bhc/star.png')}/>
                    <Text style={styles.imagetext}>
                        <Text style={styles.number}>{item.stars}</Text>
                        <Text style={styles.reviews}>
                            ({item.reviews} reviews) <Text style={styles.itemCat} >{item.category}</Text>
                        </Text>
                    </Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    card:{
        margin:6,
        color: 'white',
    },
    image:{
        height: 170,
        width: 250,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    name: {
        padding:3,
        paddingBottom: 4,
        gap: 2,
        
    },
    textName:{
        fontSize: 20,
        fontWeight: 'bold',
        padding: 2
    },
    star:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4
    },
    starImage: {
        height: 20,
        width: 20,
    },
    imagetext: {
        fontSize: 10,

    },
    stars:{
        color: 'green',
    },
    reviews: {
        color:'grey'

    },
    itemCat:{
        fontWeight: "400"
    }

})

export default HousesCard