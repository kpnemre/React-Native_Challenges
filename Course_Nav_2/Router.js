import * as React from 'react';
import {Text, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Timeline, Post, Friends} from './pages';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const First = () => {
//     return (
//         <SafeAreaView>
//             <Text>FirstPage</Text>
//         </SafeAreaView>
//     )
// }
// const Second = () => {
//     return (
//         <SafeAreaView>
//             <Text>SecondPage</Text>
//         </SafeAreaView>
//     )
// }
function MainComponent() {
  return (
    <Stack.Navigator
    // initialRouteName='PostPage'
    >
      <Stack.Screen name="MainPage" component={Timeline} />
      <Stack.Screen name="PostPage" component={Post} />
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="MainPage"
        // backBehavior='history'
        lazy={false}
        //   lazy false iki sayfayı birden render eder
        tabBarOptions={{activeTintColor: 'red'}}
        
        
        // tabBarOptions={{activeBackgroundColor:'gray'}}

        >
        <Tab.Screen
          name="MainPage"
          component={MainComponent}
          options={{title: 'ANA SAYFA'}}
        />
        <Tab.Screen
          name="ARKADAŞLAR"
          component={Friends}
          options={{title: 'GÖNDERİLER'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;

const styles = StyleSheet.create({
  container: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
