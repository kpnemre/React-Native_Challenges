import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const BookmarkScreen = ()=>{
    return (
        <View>
            <Text>Bookmark</Text>
            <Button
            title="Go to details screen...again"
            onPress={() => alert("Details")}
        />
        </View>
    )
}

export {BookmarkScreen};