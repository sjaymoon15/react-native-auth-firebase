import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD0tV5m8gaZsTY0-Wqao56AISAYTRiMy8U',
      authDomain: 'authentication-77dc1.firebaseapp.com',
      databaseURL: 'https://authentication-77dc1.firebaseio.com',
      storageBucket: 'authentication-77dc1.appspot.com',
      messagingSenderId: '355798434262'
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.spinnerStyle}>
            <Spinner size='large' />
          </View>
        );
    }
  }

  render() {
    return (
      <View style={styles.appStyle}>
        <Header headerText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  appStyle: {
    flex: 1
  },
  spinnerStyle: {
    flex: 1
  }
};
export default App;
