import * as React from 'react';
import {View, Text} from 'react-native';
import {Appbar, Title} from 'react-native-paper';
import Header from './Header';

const Search = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <Text>Search Screen</Text>
    </View>
  );
};

export default Search;
