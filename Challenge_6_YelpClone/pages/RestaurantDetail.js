import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Button,Linking } from 'react-native';




const RestaurantDetail = (props) => {
    const {selectedRestaurant} = props.route.params;
    
    console.log(selectedRestaurant);
    // address: "187 Evergreen lane"
    // area: "Pittsburgh"
    // city: "Acme"
    // country: "US"
    // id: 149800
    // image_url: "https://www.opentable.com/img/restimages/149800.jpg"
    // lat: 40.16498
    // lng: -79.418203
    // mobile_reserve_url: "http://mobile.opentable.com/opentable/?restId=149800"
    // name: "Tree Tops Restaurant"
    // phone: "8778337829x3"
    // postal_code: "15610"
    // price: 3
    // reserve_url: "http://www.opentable.com/single.aspx?rid=149800"
    // state: "PA"
    // const supportedURL = "https://google.com";
   
    
    // const OpenURLButton = ({ url, children }) => {
    //   const handlePress = useCallback(async () => {
    //     // Checking if the link is supported for links with custom URL scheme.
    //     const supported = await Linking.canOpenURL(url);
    
    //     if (supported) {
    //       // Opening the link with some app, if the URL scheme is "http" the web link should be opened
    //       // by some browser in the mobile
    //       await Linking.openURL(url);
    //     } else {
    //       Alert.alert(`Don't know how to open this URL: ${url}`);
    //     }
    //   }, [url]);
    
    //   return <Button title={children} onPress={handlePress}/>;

    

    // };


    return (
        <SafeAreaView style={{ flex: 1 }}>
    
            <View style={styles.container}>
                <Text style={styles.name}>{selectedRestaurant.name}</Text>

                <Image
                    style={styles.image}
                    source={{ uri: selectedRestaurant.image_url }}
                />
                {/* <Text style={{color:'green', alignSelf:'flex-end',fontWeight:'bold',fontSize:20}}>${selectedRestaurant.price}</Text> */}


                <View style={styles.infoContainer}>
                    <Image 
                    source={require('../icons/loc.png')}/>

                    <Text style={styles.infoText}>{selectedRestaurant.address}</Text>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{selectedRestaurant.area}</Text>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>{selectedRestaurant.postal_code}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <Image 
                    source={require('../icons/ico.png')}/>

                    <Text style={styles.infoText}>{selectedRestaurant.phone}</Text>
                </View>
                
                {/* <View style={styles.infoContainerButton}>
      <OpenURLButton url={selectedRestaurant.reserve_url}>Go to Reserve</OpenURLButton>
    </View> */}
                
         

         <TouchableOpacity  style={styles.infoContainerButton}
         renderLoding
         onPress={ ()=> Linking.openURL(selectedRestaurant.mobile_reserve_url) }>

         <Text style={{textAlign:'center', color:'white', fontSize:15, fontWeight:'bold'}}>Go to Reserve</Text>

         </TouchableOpacity>
         
     
            </View>
        </SafeAreaView>
    )
}

export { RestaurantDetail }

const styles = StyleSheet.create({
    container: { flex: 1, padding: 10, },
    name: { fontWeight: '300', fontSize: 30 },
    image: { height: Dimensions.get('window').height / 3 },
    
    infoContainer: {
        flexDirection:'row',
        justifyContent:'flex-start',
        backgroundColor: '#29b6f6',
        padding: 10,
        margin: 5,
        borderRadius: 5
    },
    infoContainerButton: {
        flexDirection:'row',
        justifyContent:'center',
        alignSelf:'center',
        backgroundColor: '#29b6f6',
        padding: 10,
        margin: 45,
        borderRadius: 5,
        // height: Dimensions.get('window').height / 14,
        width: Dimensions.get('window').width*0.40
        
    },
  
    infoText: { color: 'white', fontWeight: 'bold', paddingLeft:30, }
})