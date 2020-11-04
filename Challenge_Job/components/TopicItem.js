import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


const TopicItem = props =>{
    return(
        <TouchableOpacity>
            <Text>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}
export {TopicItem};