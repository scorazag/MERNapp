import React, {Component} from 'react';
import {Image,Platform, StyleSheet, Text, View,TextInput,Alert,ImageBackground,AsyncStorage} from 'react-native';
import { Container, Header, Content, Button, StyleProvider } from 'native-base';
import styles from './styles'


class Home extends Component{

  state = {email:"", password:""}

  static navigationOptions = {
    header:null
  }

  checkLogin(){
    const{email,password} = this.state
    if(email == '' && password == ''){
      Alert.alert('Error','Faltan campos',[{
        text:'OK'
      }])
    }
    else{
      fetch('http://172.16.12.74:3000/users/authenticate',{
        method:'POST',
        headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          email:email,
          password:password
        }),
      })
      .then((response) => response.json())
      .then((res) =>{
        if (res.success === true) {

          AsyncStorage.setItem('usuario',JSON.stringify(res.user));
          this.props.navigation.navigate('Dashboard');
        }
      })
      .catch((error) =>{
        alert(error)
      })
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
          <TextInput style = {styles.input} placeholder="Correo" onChangeText={text => this.setState({email:text})}/>
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
