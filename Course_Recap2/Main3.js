import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, Alert, FlatList, StyleSheet, TextInput } from 'react-native';
import { ProductCard } from './components';


import productData from './product_data.json';


const App = () => {

    const [searchValue, setSearchValue] = useState("");
    const [displayList, setDisplayList] = useState([]);

    // console.log(productData)
    const renderListItem = ({ item }) => <ProductCard product={item} />



    // useEffect(() => {
    //     Alert.alert ('Clarusway','Hoşgeldiniz')
    // }, [])

    useEffect(() => {
        // Alert.alert("Clarushop", "Hoşgeldiniz, keyifli alışverişler..");
        setDisplayList(productData)
    }, [])


    useEffect(() => {
        const filteredValue = productData.filter(item => {
            const text = searchValue.toUpperCase();
            const productTitle = item.title.toUpperCase();
            return productTitle.indexOf(text) > -1;
        })
        setDisplayList(filteredValue)
    }, [searchValue])

    // React.useState yukarıda import etmeden kullanım


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text style={styles.banner}>Techoshop</Text>
                <View style={styles.searchBar}>
                    <TextInput
                        placeholder="Ürün ara..."
                        onChangeText={(value) => setSearchValue(value)}
                    />
                </View>


                <FlatList
                    // keyExtractor = {(item,index)=>index.toString()}
                    keyExtractor={(_, index) => index.toString()}

                    data={displayList}
                    // renderItem={(data.item) => <Text {data.item.title} />}
                    // renderItem= {({ item }) => <Text>{item.title}</Text>}
                    renderItem={renderListItem}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    )
}


export default App;

const styles = StyleSheet.create({
    banner: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center'
    },
    searchBar: {
        backgroundColor: "#eceff1",
        padding: 8,
        margin: 5,
        borderRadius: 10
    }
})
