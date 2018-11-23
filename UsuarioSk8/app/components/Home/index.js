import React, {Component} from 'react';
import {Image,Platform, StyleSheet, Text, View,TextInput,Alert,ImageBackground} from 'react-native';
import { Container, Header, Content, Button, StyleProvider } from 'native-base';
import styles from './styles'


class Home extends Component{

  state = {correo:"", password:""}

  static navigationOptions = {
    header:null
  }

  checkLogin(){
    const{correo,password} = this.state
    if(correo == 'admin' && password == 'admin'){
      this.props.navigation.navigate('Dashboard');
    }
    else{
      Alert.alert('Error','clave incorrecta',[{
        text:'OK'
      }])
    }
    
  }
      
  render(){
    const {heading, input,parent} = styles
    const img = require('../../assets/sk8_wall_board.png');
    const img_icon = require('../../assets/sk8_icon2.png');

    return(
      <ImageBackground source={img} style={styles.fondo}>
        <View style = {styles.parent}>
          <Text style = {styles.heading}> Bienvenido a SK8 App</Text>
          <Image source={img_icon} style = {styles.icon}/>
          <TextInput style = {styles.input} placeholder="Correo" onChangeText={text => this.setState({correo:text})}/>
          <TextInput style = {styles.input} secureTextEntry={true} placeholder="Password" onChangeText={text => this.setState({password:text})}/>
            <Button rounded warning block onPress={_ => this.checkLogin()} style={styles.buttons}>
              <Text> Entrar</Text>
            </Button>
        </View>
      </ImageBackground>

    )
  }
}
  
export default Home
  