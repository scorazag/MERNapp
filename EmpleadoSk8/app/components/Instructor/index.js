import React, {Component} from 'react';
import {View,Text,Image,ImageBackground} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button } from 'native-base';
import styles from './styles.js';
class Instructor extends Component{
  render(){
    return(
      < ImageBackground   style={styles.container}
      source={require('../../image/cliente.jpg')} >
        <Content style={styles.overlayContainer}>
        <Image
        style={styles.emlogo}
          source={require('../../image/logo1.png')}
        />
          <Text style={styles.titulo}>Registro de Instructor</Text>
          <Form>
           
              <Label style={styles.lab}>Nombre</Label>
              <Input style={styles.texiput} secureTextEntry={false} placeholder="nombre" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({Inombre:text})}/>
           

            
              <Label style={styles.lab} >Edad</Label>
              <Input style={styles.texiput} secureTextEntry={false} placeholder="Edad" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({Iedad:text})} />
            
           
              <Label style={styles.lab} >Correo</Label>
              <Input style={styles.texiput} secureTextEntry={false} placeholder="correo" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({Icorreo:text})} />
           
              <Label style={styles.lab}>Telefono</Label>
              <Input style={styles.texiput} secureTextEntry={false} placeholder="Telefono" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({Itel:text})}/>
           

           <Button style={styles.bulog} block onPress={_ => this.checkLogin()}>
            <Text style={styles.resusu}> Registrar Instructor</Text>
          </Button>
          </Form>
        </Content>
        </ ImageBackground>

    )
  }
}

export default Instructor
