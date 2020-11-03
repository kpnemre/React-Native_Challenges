import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,

} from 'react-native';
import axios from 'axios';
import Config from "react-native-config";

const apiKey = Config.API_KEY;
const config = {
    headers: {
        Authorization: 'Bearer ' + apiKey,
    },
};
const fetchCafes = (location, term) => {
  // console.log(process.env.API_KEY);


    fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`, config)
        .then((response) => response.json())
        // .then(json => {
        //     console.log(json.businesses)
        // })
        .catch((error) => console.error(error))

}

export default fetchCafes;