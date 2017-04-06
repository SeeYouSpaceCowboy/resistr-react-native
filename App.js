import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Alert, PushNotificationIOS } from 'react-native';

const URL = "http://localhost:3000/api/representatives?address=%22735%20jefferson%20ave%20brooklyn%20ny%22"

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      json: "Nothing"
    }
  }

  componentDidMount(){
    this.fetchData().done()
  }

  componentWillMount() {
    PushNotificationIOS.addEventListener('notification', this._onNotification);
  }

  componentWillUnmount() {
    PushNotificationIOS.removeEventListener('notification', this._onNotification);
  }


  onButtonPress = () => {
    Alert.alert(this.state.json);
  }

  async fetchData() {
    const response = await fetch(URL)
    const json = await response.json()
    const city = json.address.city
    this.setState({ json: city })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Button
          onPress={ this.onButtonPress }
          title={ this.state.json }
          color="#841584" />
      </View>
    );
  }

  _sendNotification() {
    require('RCTDeviceEventEmitter').emit('remoteNotificationReceived', {
      aps: {
        alert: 'Sample notification',
        badge: '+1',
        sound: 'default',
        category: 'REACT_NATIVE'
      },
    });
  }

  _onNotification(notification) {
    AlertIOS.alert(
      'Notification Received',
      'Alert message: ' + notification.getMessage(),
      [{
        text: 'Dismiss',
        onPress: null,
      }]
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
