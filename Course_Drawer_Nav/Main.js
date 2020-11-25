import React from 'react';
import {View, Text, Button, Dimensions, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// import Icon from 'react-native-vector-icons/Ionicons';
import {
  MainTabScreen,
  DrawerContent,
  SupportScreen,
  SettingsScreen,
  BookmarkScreen,
} from './pages';

import RootStackScreen from './pages/RootStackScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>

    //   <NavigationContainer>

    //     {/* <Drawer.Navigator initialRouteName="Home"> */}

    // <Drawer.Navigator
    //  drawerContent={props => <DrawerContent {...props} />}
    //  drawerType={'slide'}
    // //  hideStatusBar={true}
    //  drawerStyle={{
    //   backgroundColor: '#79c7bb',
    //   width: 250,
    // }}>

    //       {/*
    //       <Drawer.Screen name="Home" component={HomeStackScreen} />
    //       <Drawer.Screen name="Details" component={DetailsStackScreen} />
    //        */}

    //       <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
    //       <Drawer.Screen name="SupportScreen" component={SupportScreen} />
    //       <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    //       <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />

    //     </Drawer.Navigator>
    //   </NavigationContainer>
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
