

import  React from 'react';
import { View, Text,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {CityList, RestaurantDetail,ReastaurantList} from './pages' 


const Stack = createStackNavigator();

function Router () {


    // console.log('Router');

  return (
    <NavigationContainer>

      <Stack.Navigator 
    //   initialRouteName='SecondPage'
      screenOptions={
        {  headerShown:false,
            gestureEnabled:true}
    
    }
    >
        <Stack.Screen name="Cities"
         component={CityList}
          options={{ title: 'Gönderiler' }} />

        <Stack.Screen name="Reastaurants" component={ReastaurantList} />
        <Stack.Screen name="Details" component={RestaurantDetail} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;