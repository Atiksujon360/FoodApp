import React from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home'; 

const Stack = createNativeStackNavigator();

const App = () => {
  return ( 
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShown:false
          }}>
          <Stack.Screen name="Home Page" component={Home} /> 
        </Stack.Navigator>
      </NavigationContainer> 
  );
};

export default App;

const styles = StyleSheet.create({});
