import * as React from 'react';
import { Button, View } from 'react-native';
import { DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function DrawerContent(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>TEST</Text>
    </View>
  );
}

export  {DrawerContent};