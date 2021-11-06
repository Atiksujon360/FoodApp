import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const Categories = () => {
  const items = [
    {
      image: require('../assets/images/shopping-bag.png'),
      text: 'Shooping',
    },
    {
      image: require('../assets/images/soft-drink.png'),
      text: 'Soft-Drinks',
    },
    {
      image: require('../assets/images/bread.png'),
      text: 'Bakery items',
    },
    {
      image: require('../assets/images/fast-food.png'),
      text: 'Fast Foods',
    },
    {
      image: require('../assets/images/deals.png'),
      text: 'Deals',
    },
  ];
  return (
    <View
      style={{
        backgroundColor: '#fff',
        marginTop: 10,
        borderRadius: 30,
        padding: 10,
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          {items.map((item, index) => (
            <View style={styles.catagori}>
              <Image style={styles.imageSize} source={item.image} />
              <Text style={styles.textStyle}>{item.text}</Text>
            </View>
          ))} 
        </View>
      </ScrollView>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: 30,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  catagori: {
    alignItems: 'center',
    marginRight: 30,
  },
  imageSize: {
    height: 40,
    width: 30,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});
