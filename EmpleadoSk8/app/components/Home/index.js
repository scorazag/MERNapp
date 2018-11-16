import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Alert} from 'react-native';
import { Container, Header, Content, Button } from 'native-base';
import styles from './styles'

class Home extends Component{

  state = { clave:""}

  checkLogin(){
    const { clave } = this.state
    if (clave == 'admin') {
      this.props.navigation.navigate('dashoard');
    }
    else {
      Alert.alert('Error','clave incorrecta',[{
        text:'OK'
      }])
    }
  }


  render(){
    const {heading, input,parent} = styles
    return(
      <View style={parent}>
        <Text style={heading}> Bienvenidos </Text>
        <TextInput style={input} secureTextEntry={true} placeholder="Token" onChangeText={text => this.setState({clave:text})}/>
        <Button block onPress={_ => this.checkLogin()}>
            <Text> Entrar</Text>
          </Button>
      </View>
    )
  }
}

export default Home
