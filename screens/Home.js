import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import ResturenItems, {localResturent} from '../components/ResturenItems';
import SearchBar from '../components/SearchBar';

const YELP_API_KEY =
  'Vv_241YVovQgzPtJ79vLUsfsEXrkG8jJCxd_0vpLo0doj1S0T0DyGaiD78PnazWu3sfLVLuWBZHRpELKCCbnIaCeQfioW0vMk62yVoSHtO6EI9Axd7K5blK9_iyGYXYx';

const Home = ({navigation}) => {
  const [resturentData, setResturentData] = useState(localResturent);

  const getResturenYalp = () => {
    const Url =
      'https://api.yelp.com/v3/businesses/search?term=restaurants&location=autocomplete';

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      }
    };
    return fetch(Url, apiOptions)
      .then(res => res.json())
      .then(json => setResturentData(json.businesses));
  };

  useEffect(() => {
    getResturenYalp();
  }, [100]);

  return (
    <ScrollView>
      <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
        <View style={{backgroundColor: 'white', padding: 15}}>
          <HeaderTabs />
          <SearchBar />
        </View>
        <View>
          <Categories />
        </View>
        <ResturenItems resturentData={resturentData} />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
