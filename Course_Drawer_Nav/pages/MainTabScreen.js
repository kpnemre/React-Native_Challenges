import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DetailsScreen, HomeScreen, ExploreScreen, ProfileScreen} from '../pages';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStackScreen({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerShown: false,
        gestureEnabled: true,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
        headerTintColor: '#fff',

          headerLeft: () => (
            <Icon.Button
              name="align-justify"
              backgroundColor="#009387"
              onPress={() => navigation.openDrawer()}>
              
            </Icon.Button>

            // <Icon.Button
            //   name="list-outline"
            //   size={25}
            //   backgroundColor="red"
            //   onPress={() => navigation.openDrawer()}></Icon.Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function DetailsStackScreen({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          headerLeft: () => (
            <Icon.Button
            name="align-justify"
            backgroundColor="#009387"
            onPress={() => navigation.openDrawer()}>
            
          </Icon.Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const MainTabScreen = ()=>{
return (
  <Tab.Navigator
  initialRouteName="Home"
  activeColor="#FFF"
  
>
  <Tab.Screen
    name="Home"
    component={HomeStackScreen}
    options={{
      tabBarColor:'#009387',
      tabBarLabel: 'Home',
      tabBarIcon: ({ color }) => (
        <Icon name="home" color={color} size={26} />
      ),
    }}
  />
  <Tab.Screen
    name="Details"
    component={DetailsStackScreen}
    options={{
      tabBarColor:'#1f65ff',
      tabBarLabel: 'Details',
      tabBarIcon: ({ color }) => (
        <Icon name="bell" color={color} size={26} />
      ),
    }}
  />

  <Tab.Screen
    name="Profile"
    component={ProfileScreen}
    options={{
      tabBarColor:'#694fad',
      tabBarLabel: 'Profile',
      tabBarIcon: ({ color }) => (
        <Icon name="user" color={color} size={26} />
      ),
    }}
  />

<Tab.Screen
    name="Explore"
    component={ExploreScreen}
    options={{
      tabBarColor:'#d02860',
      tabBarLabel: 'Explore',
      tabBarIcon: ({ color }) => (
        <Icon name="search-plus" color={color} size={26} />
      ),
    }}
  />

</Tab.Navigator>
)
}


export {MainTabScreen};
