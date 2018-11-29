import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Alert,Image,ImageBackground,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Button, StyleProvider } from 'native-base';
import styles from './styles';

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
      <ImageBackground
      style={{flex: 1,width: '100%', height: '100%'}}
      source={require('../../image/fonloem.jpg')}
        >
      <View style={styles.con} >
      <Image
        style={styles.patilogo}
          source={require('../../image/logo1.png')}
        />
        <Text style={heading}> Bienvenidos </Text>
        <TextInput style={input} secureTextEntry={true} placeholder="Token" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({clave:text})}/>  
        <TouchableOpacity
         style={styles.boxs}  block
         onPress={_ => this.checkLogin()}
       >
         <Text style={styles.textSe}> Iniciar Sesion </Text>
       </TouchableOpacity>
     </View>

     </ImageBackground>
    )
  }
}

export default Home
