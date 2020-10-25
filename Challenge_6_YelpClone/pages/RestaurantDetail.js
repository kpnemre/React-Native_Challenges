import axios from 'axios';
import React from 'react';
import  {SafeAreView, Text,View} from 'react-native';


const RestaurantDetail =(props)=>{

    const fetchCityData = async ()=>{
        const response = await axios.get('https://opentable.herokuapp.com/api/restaurants');
        setCityList(response.data.cities);
 
     }
     
    return(
        <SafeAreaView>
            <View>
                <Text>
                ReastaurantDeatils 
                </Text>
            </View>
        </SafeAreaView>
    )
}

export {RestaurantDetail};