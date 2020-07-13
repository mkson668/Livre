import React from 'react';
// styling cannot be used from css btw
// import './Bookcase.css';
import {StyleSheet, Text, View, Button} from 'react-native';
import Profile from './Profile';

class Lists extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lists</Text>
        <Button title="Go to Book Details" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Lists;
