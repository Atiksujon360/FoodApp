import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localResturent = [
  {
    image_url:
      'https://www.mcdonalds.com.my/images/welcome/mcd_foods_m.jpg?id=d28f4a25e5359fc09877',
    name: 'MacDonals',
    rating: '4.5',
  },
  {
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFRX5JZTagYNQYZZrye9KuGM_hzTlLpVKP8wkGGa-MlVsIpmibshh43tQP5ZaiyUm81Qo&usqp=CAU',
    name: 'KFC Family Buckets',
    rating: '3.7',
  },
  {
    image_url:
      'https://www.koreanbapsang.com/wp-content/uploads/2014/11/DSC8603-500x500.jpg',
    name: 'Duck Galbi',
    rating: '5.0',
  },
];
export default ResturenItems = (props) => {
  return (
    <>
      {props.resturentData.map((resturent, index) => {
        return (
          <View
            key={index}
            style={{backgroundColor: 'white', marginTop: 10, borderRadius: 10}}>
            <ResturentImage image_url={resturent.image_url} />
            <ResturentInfo name={resturent.name} rating={resturent.rating} />
          </View>
        );
      })}
    </>
  );
};

const ResturentImage = props => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={{flexDirection: 'row', padding: 5}}>
        <Image
          source={{
            uri: props.image_url,
          }}
          style={{height: 180, width: '100%'}}
        />
        <TouchableOpacity style={{position: 'absolute', right: 10, top: 10}}>
          <MaterialCommunityIcons
            name="heart-outline"
            color="white"
            size={24}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const ResturentInfo = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
      }}>
      <View>
        <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>
          {props.name}
        </Text>
        <Text>35-40 . min</Text>
      </View>
      <View style={{backgroundColor: '#eee', padding: 10, borderRadius: 20}}>
        <Text> {props.rating}</Text>
      </View>
    </View>
  );
};
