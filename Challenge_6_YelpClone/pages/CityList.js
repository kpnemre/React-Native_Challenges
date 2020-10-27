import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, FlatList, ActivityIndicator } from 'react-native';

import { CityItem, SearchBar } from '../components'

let originalList = [];

const CityList = (props) => {

  const [isLoading, setLoading] = useState(true);


  const [cityList, setCityList] = useState([]);

//   const[originalList, setOriginalList]= useState([]);
//   bu tanımlamamızın amacı orjinal listeyi bozmamak. geri gelememe durumumuz oluşuyor.

  // async-await
  const fetchCityData = async () => {
    const { data } = await axios.get("https://opentable.herokuapp.com/api/cities");

    // setCityList(response.data.cities);
    setCityList(data.cities);
    // setOriginalList(data.cities);
    originalList = [...data.cities];
    setLoading(false);
  };




  // then cath
  // const fetchCityData = () => {
  //     axios.get('').then((response) =>
  //     setCityList(response.data))
  // }

  useEffect(() => {
    fetchCityData();
  }, []);

  const renderCities = ({item}) => {
  return (
    <CityItem 
    cityName={item}
    onSelect = {()=>props.navigation.navigate('Restaurants', {selectedCity:item})}
    />
  ) }

  const renderSeperator = () => (
    <View style={{borderWidth: 1, borderColor: '#e0e0e0'}} />
  );

  function searchCity (search){
    const filteredCities=originalList.filter(city => {
        const text = search.toUpperCase();
        const cityName = city.toUpperCase();
        return cityName.indexOf(text) > -1;
    })
    // setOriginalList(filteredCities);
    setCityList(filteredCities);
  }



  return (
    <SafeAreaView>
      <View>
      <Text style={{ margin: 5, fontWeight: 'bold', fontSize: 30 }}>Cities</Text>
        <SearchBar
          placeholder="Bir şehir arayın"
        //   onSearch={(value) => console.log(value)}
          onSearch={(value) => searchCity(value)}
        />

                  {
                    isLoading ?
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator size='large' color='red'/>
                        </View>
                        :
                        <FlatList
                        keyExtractor={(_, index) => index.toString()}
                        data={cityList}
                        renderItem={renderCities}
                        ItemSeparatorComponent={renderSeperator}
                      />
                }
   
      </View>
    </SafeAreaView>
  );
};

export {CityList};
