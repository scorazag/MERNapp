import React, {Component} from 'react';
import {View,Text,Image,ImageBackground,TouchableOpacity,SearchBar,someMethod,CustomComponent} from 'react-native';
import { Container, Header, Content,Body,Card, CardItem, Thumbnail, Form, Item, Input, Label,Picker,Button,Icon,Left,Right } from 'native-base';
import styles from './styles.js';
class Paquetes extends Component{
 
  constructor(props) {
    super(props);
    this.state = {
      state: 'paquete'
    }
  }
  render(){
    return(
      < ImageBackground   style={styles.container}
      source={require('../../image/fonloem.jpg')} >
        <Content style={styles.overlayContainer}>
        <Image
        style={styles.emlogo}
          source={require('../../image/logo1.png')}
        />
          <Text style={styles.titulo}>Contrato de Paquete</Text>
         
          <Form>
            <Label style={styles.lab}>Correo</Label>
            <Input style={styles.texiput} placeholder="Correo" keyboardType='email-address' placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({Unombre:text})}/>
           
            <Label style={styles.lab}>Selecione el # de clases</Label>
            <Picker mode="dropdown"   style={styles.pic}
             placeholder="# de clases" placeholderStyle={{ color: "#FFFFFF" }}  placeholderIconColor="#FFFFFF"
             selectedValue={this.state.language}
             onValueChange={(lang) => this.setState({language: lang})}>
            
             <Picker.Item label="Paquete de 4 Clases" value="4" />
            <Picker.Item label="Paquete de 8 Clases" value="8" />
            </Picker>

             <Button style={styles.bulog} block onPress={_ => this.checkLogin()}>
            <Text style={styles.resusu}> Registrar Pago</Text>
          </Button>
          </Form>

        </Content>
      </ ImageBackground>
    )
  }
}

export default Paquetes
