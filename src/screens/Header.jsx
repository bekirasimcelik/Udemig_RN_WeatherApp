import * as React from 'react';
import {Appbar, Title} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';

const Header = props => {
  return (
    <Appbar.Header style={styles.header}>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
        <Title
          style={{
            color: 'white',
          }}>
          {props.name}
        </Title>
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#00aaff',
  },
});

export default Header;
