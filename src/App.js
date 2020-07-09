/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Bookcase from './screens/Bookcase';
import Explore from './screens/Explore';
import AddBook from './screens/AddBook';
import Lists from './screens/Lists';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          // route is an alias
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            // For each of the screens and this sets the tab icon for each of the then using a if else block
            if (route.name === 'Bookcase') {
              // if the tab is 'focused' or active or not then set it correspondingly
              iconName = focused ? 'ios-book' : 'ios-book-outline';
            } else if (route.name === 'Explore') {
              iconName = focused ? 'ios-search' : 'ios-search-outline';
            } else if (route.name === 'Add Book') {
              iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
            } else if (route.name === 'Lists') {
              iconName = focused ? 'ios-list' : 'ios-list-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Bookcase" component={Bookcase} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Add Book" component={AddBook} />
        <Tab.Screen name="Lists" component={Lists} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
