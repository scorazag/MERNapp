import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Alert} from 'react-native';
import { Container, Header, Content, Button, StyleProvider } from 'native-base';
import styles from './styles'

class Home extends Component{

  state = { clave:""}

  static navigationOptions = {
    header:null
  }

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
      <View style={{backgroundColor: '#2a0e71',flex:1,}} >
        <View style={parent}>
          <Text style={heading}> Bienvenidos </Text>
          <TextInput style={input} secureTextEntry={true} placeholder="Token" onChangeText={text => this.setState({clave:text})}/>
            <Button rounded block onPress={_ => this.checkLogin()} color='#ff6600'>
              <Text> Entrar</Text>
            </Button> 
        </View>
      </View>
    )
  }
}

export default Home
