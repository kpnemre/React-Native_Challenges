import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import {DetailsScreen, HomeScreen} from './pages';
// import { IconButton } from 'react-native-paper';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function HomeStackScreen({navigation}) {
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
        name="Home"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor="red"
              onPress={() => navigation.openDrawer()}></Icon.Button>
          )
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
              name="ios-menu"
              size={25}
              backgroundColor="red"
              onPress={() => navigation.openDrawer()}></Icon.Button>
          )
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailsStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// <NavigationContainer>
// <Drawer.Navigator drawerContent ={text =><DrawerContent {...text}/>}>
//   {/* <Drawer.Screen name="Home" component={MainTabScreen} /> */}
//   {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
// </Drawer.Navigator>
// </NavigationContainer>

// PART-1 STACK NAV

// <NavigationContainer>
// <Stack.Navigator screenOptions={{
//             headerStyle: {
//               backgroundColor: '#009387',
//             },
//             headerTintColor: '#fff',
//             headerTitleStyle: {
//               fontWeight: 'bold',
//             },
// }}>
//   <Stack.Screen name="Home" component={HomeScreen} />
//   <Stack.Screen name="Details" component={DetailsScreen} />
// </Stack.Navigator>
// </NavigationContainer>
