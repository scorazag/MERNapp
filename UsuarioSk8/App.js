import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,Image} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  myfunction(){

  }
  render() {
    const Hola =  "hola mundo desde variable"
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hola Mundo </Text>
        <Text style={styles.instructions}>aqui andamos chidos</Text>
        <Text style={styles.nuevo}>{Hola}</Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  nuevo:{
    textAlign:'left',
    color:'#FF0000',
    fontSize:60
  }
});
