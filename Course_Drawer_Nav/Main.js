import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details Screen"
        // onPress={()=> props.navigation.navigate('Details')}
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}
function DetailsScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details Screen ....again"
        onPress={() => navigation.push('Details')}
      />

      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />

      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />

<Button
        title="Go to first screen"
        onPress={() => navigation.popToTop()}
      />

    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
                  headerStyle: {
                    backgroundColor: '#009387',
                  },
                  headerTintColor: '#fff',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                  },
      }}>
        <Stack.Screen name="Home" component={HomeScreen} 
         options={{
          // title: 'My home',

          // headerStyle: {
          //   backgroundColor: '#009387',
          // },
          // headerTintColor: '#fff',
          // headerTitleStyle: {
          //   fontWeight: 'bold',
          // },


        }}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// <NavigationContainer>
// <Drawer.Navigator drawerContent ={text =><DrawerContent {...text}/>}>
//   {/* <Drawer.Screen name="Home" component={MainTabScreen} /> */}
//   {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
// </Drawer.Navigator>
// </NavigationContainer>
