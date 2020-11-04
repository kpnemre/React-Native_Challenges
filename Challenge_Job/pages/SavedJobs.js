import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const SavedJobs =props=>{
<SafeAreaView>
    <View>
        <Text>SavedJobs</Text>
    </View>
</SafeAreaView>
}

export {SavedJobs};

