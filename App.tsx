import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from './src/screens/Search';
import Home from './src/screens/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({color}) => {
              let iconName;
              if (route.name === 'home') {
                iconName = 'home-city-outline';
              } else if (route.name === 'search') {
                iconName = 'city';
              }
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={25}
                  color={color}
                />
              );
            },
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            tabBarActiveBackgroundColor: '#00aaff',
            tabBarInactiveBackgroundColor: '#00aaff',
            tabBarStyle: [{display: 'flex'}],
          })}>
          <Tab.Screen
            name="home"
            component={Home}
            initialParams={{city: 'Kayseri'}}
          />
          <Tab.Screen name="search" component={Search} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
