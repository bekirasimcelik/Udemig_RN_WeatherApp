import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import Header from './Header';

const Search = () => {
  const [city, setCity] = useState('');
  return (
    <View style={{flex: 1}}>
      <Header name="Search Screen" />
      <TextInput
        label="city name"
        style={styles.textInput}
        value={city}
        onChangeText={text => setCity(text)}
      />
      <Button
        icon="camera"
        mode="contained"
        onPress={() => console.log('Pressed')}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  textInput: {
    color: '#00aaff',
  },
});
