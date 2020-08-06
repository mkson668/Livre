import React, {Component} from 'react';
// styling cannot be used from css btw
// import './Bookcase.css';
import {StyleSheet, Text, View} from 'react-native';

export default class BookcaseItemDetails extends Component {
  render() {
    const {title} = this.props.route.params;
    const {details} = this.props.route.params;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.details}>{details}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#FFF',
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 4,
    shadowOffset: {width: 1, height: 1},
    shadowColor: '#CCC',
    shadowOpacity: 1.0,
    shadowRadius: 1,
  },
  title: {
    fontSize: 20,
    textAlign: 'justify',
    fontWeight: 'bold',
    paddingTop: 10,
    paddingLeft: 10,
    color: '#615C5C',
  },
  details: {
    padding: 10,
    marginTop: 5,
    fontSize: 15,
    color: '#777',
  },
});
