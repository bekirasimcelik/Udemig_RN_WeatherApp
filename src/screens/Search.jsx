import React, {useState} from 'react';
import {TextInput, Button, Card} from 'react-native-paper';
import {View, Text, FlatList, Alert} from 'react-native';
import Header from './Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Search = ({navigation}) => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useState([]);

  const apiKey = 'e25cc87ebc38438baaf160706240507';

  const fetchWeather = async text => {
    setCity(text);
    if (text.length > 2) {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${text}&aqi=no`,
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setWeather(result);
        setCities([result.location]);
      } catch (error) {
        console.error('Fetch error: ', error);
        Alert.alert('Error', 'Network request failed');
      } finally {
        setLoading(false);
      }
    }
  };

  const btnClick = async () => {
    await AsyncStorage.setItem('newcity', city);
    navigation.navigate('home', {city});
  };

  const listClick = async cityname => {
    setCity(cityname);
    await AsyncStorage.setItem('newcity', cityname);
    navigation.navigate('home', {city: cityname});
  };

  return (
    <View style={{flex: 1}}>
      <Header name="Search Screen" />
      <TextInput
        label="City name"
        theme={{colors: {primary: '#00aaff'}}}
        value={city}
        onChangeText={text => fetchWeather(text)}
        style={{margin: 20}}
      />
      <Button
        icon="content-save"
        mode="contained"
        theme={{colors: {primary: '#00aaff'}}}
        style={{margin: 20}}
        onPress={() => btnClick()}>
        <Text style={{color: 'white'}}>Save changes</Text>
      </Button>
      {loading && <Text>Loading...</Text>}
      <FlatList
        data={cities}
        renderItem={({item}) => (
          <Card
            style={{margin: 2, padding: 12}}
            onPress={() => listClick(item.name)}>
            <Text>
              Location: {item.name}, {item.country}
            </Text>
            {weather && weather.location.name === item.name && (
              <Text>Temperature: {weather.current.temp_c}°C</Text>
            )}
          </Card>
        )}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default Search;
