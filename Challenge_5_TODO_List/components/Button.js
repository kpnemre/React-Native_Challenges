import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const Button = () => {

    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);
    return (

        <TouchableOpacity style={styles.container}
        onPress={onPress}
        >

            <Text style={styles.text}>{count}</Text>
            <Text style={styles.text}>ADD TODO</Text>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#546E7A',
        padding: 20,
        width: Dimensions.get('window').width / 2,
        alignSelf: 'center',
        borderRadius: 10
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    }
})

export { Button }
