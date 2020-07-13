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
import {createStackNavigator} from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';

import Bookcase from './screens/Bookcase';
import Explore from './screens/Explore';
import AddBook from './screens/AddBook';
import Lists from './screens/Lists';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();

const ListStack = createStackNavigator();

function ListStackScreen() {
  return (
    <ListStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'green',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <ListStack.Screen name="Lists" component={Lists} />
      <ListStack.Screen name="Details" component={Lists} />
    </ListStack.Navigator>
  );
}

const BookListStack = createStackNavigator();

function BookcaseStackScreen() {
  return (
    <BookListStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'green',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <BookListStack.Screen name="Your Bookcase" component={Bookcase} />
      <BookListStack.Screen name="Details" component={Lists} />
    </BookListStack.Navigator>
  );
}

const AddBookStack = createStackNavigator();

function AddBookStackScreen() {
  return (
    <AddBookStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'green',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <BookListStack.Screen name="AddBook" component={AddBook} />
    </AddBookStack.Navigator>
  );
}

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'green',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <BookListStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
}

const ExploreStack = createStackNavigator();

function ExploreStackScreen() {
  return (
    <ExploreStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'green',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <ExploreStack.Screen name="Explore" component={Explore} />
      <ExploreStack.Screen name="Details" component={Lists} />
    </ExploreStack.Navigator>
  );
}

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
        <Tab.Screen name="Bookcase" component={BookcaseStackScreen} />
        <Tab.Screen name="Explore" component={ExploreStackScreen} />
        <Tab.Screen name="Add Book" component={AddBookStackScreen} />
        <Tab.Screen name="Lists" component={ListStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
