import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD0tV5m8gaZsTY0-Wqao56AISAYTRiMy8U',
      authDomain: 'authentication-77dc1.firebaseapp.com',
      databaseURL: 'https://authentication-77dc1.firebaseio.com',
      storageBucket: 'authentication-77dc1.appspot.com',
      messagingSenderId: '355798434262'
    });
  }
  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <Text>An App</Text>
      </View>
    );
  }
}

export default App;
