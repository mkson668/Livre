import React from 'react';
// styling cannot be used from css btw
// import './Bookcase.css';
import {StyleSheet, Text, View} from 'react-native';

class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
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

export default Profile;
