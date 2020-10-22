import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Dimensions,
  ScrollView,

} from 'react-native';

import { yelpFusionAPIKey } from './helpers/YelpFusionAPI';
import GetLocation from 'react-native-get-location';
// import MapView from 'react-native-maps';
import axios from "react-native-axios";

GetLocation.getCurrentPosition({
  enableHighAccuracy: true,
  timeout: 15000,
})
  .then((location) => {
    console.log(location);
  })
  .catch((error) => {
    const {code, message} = error;
    console.warn(code, message);
  });

<MapView
  style={styles.map}
  customMapStyle={MapStyle}
  showsUserLocation={true}
  initialRegion={initialRegion}
/>;
// Set radius from current location as 4 km.
const radius = 4000;
// Set limit for number of places as 20.
const limit = 20;



const config = {
 headers: {
 Authorization: "Bearer " + yelpFusionAPIKey,
  },
};

const fetchNearbyPlacesWithYelp = async () => {
 return axios
    .get(
 "https://api.yelp.com/v3/businesses/search?term=delis&latitude=" +
 location.latitude +
 "&longitude=" +
 location.longitude +
 "&radius=" +
 radius +
 "&limit=" +
 limit,
 config
    )
    .then((place) => {
 // Get places' names and images.
 this.setState({
 places: place.data.businesses.map((x) => ({
 name: x.name,
 image_url: x.image_url,
        })),
      });
    })
    .catch((error) => {
 console.log(error);
    });
};

