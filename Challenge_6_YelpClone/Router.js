

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }


// import First from './pages/First';
// import Second from './pages/Second';


const Stack = createStackNavigator();

function Router () {
    console.log('Router');
  return (
    <NavigationContainer>
      <Stack.Navigator 
    //   initialRouteName='SecondPage'
      screenOptions={
        {  headerShown:false,
            gestureEnabled:true}
    
    }
    >
        <Stack.Screen name="FirstPage"
         component={First}
          options={{ title: 'Gönderiler' }} />

        <Stack.Screen name="SecondPage" component={Second} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;