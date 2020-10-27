import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, ActivityIndicator} from 'react-native';
import { RestaurantItem, SearchBar } from '../components';

let originalList = [];

const RestaurantList = (props) => {
    const [isLoading, setLoading] = useState(true);

    const [restaurantList, setRestaurantList] = useState([]);
    const { selectedCity } = props.route.params;


    const fetchRestaurants = () => {
        axios.get(
            'http://opentable.herokuapp.com/api/restaurants',
            {
                params: {
                    city: selectedCity
                }
            })
            .then(response => {
                setRestaurantList(response.data.restaurants);
                originalList = [...response.data.restaurants];
                setLoading(false);
            });
           
          
    }

    useEffect(() => {
        fetchRestaurants();
    }, [])

    const renderRestaurants = ({ item }) => {
        return (
            <RestaurantItem
                restaurant={item}
                onSelect={() => props.navigation.navigate('Details', { selectedRestaurant: item })}
            />
        )
    }

    function searchRestaurant(search) {
        const filteredRestaurants = originalList.filter(restaurant => {
            const text = search.toUpperCase();
            const restaurantName = restaurant.name.toUpperCase();

            return restaurantName.indexOf(text) > -1;
        })

        setRestaurantList(filteredRestaurants);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <View>
                    <Text style={{ margin: 5, fontWeight: 'bold', fontSize: 30 }}>{selectedCity} Restaurants</Text>
                    <SearchBar
                        placeholder="Search a restaurant..."
                        onSearch={(value) => searchRestaurant(value)}
                    />
                </View>
                {
                    isLoading ?
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator size='large' color='red'/>
                        </View>
                        :
                        <FlatList
                        keyExtractor={(_, index) => index.toString()}
                        data={restaurantList}
                        renderItem={renderRestaurants}
                    />
                }
           
            </View>
        </SafeAreaView>
    )
}

export { RestaurantList }