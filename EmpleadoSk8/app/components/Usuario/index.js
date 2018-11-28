import React, {Component} from 'react';
import {View,Text,Image,ImageBackground} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button } from 'native-base';
import styles from './styles.js';
class Usuario extends Component{
  render(){
    return(
      < ImageBackground   style={styles.container}
      source={require('../../image/Em.jpg')} >
        <Content style={styles.overlayContainer}>
        <Image
        style={styles.emlogo}
          source={require('../../image/logo1.png')}
        />
          <Text style={styles.titulo}>Registro de Usuario</Text>
          <Form>
           
              <Label style={styles.lab}>Nombre</Label>
              <Input style={styles.texiput} secureTextEntry={true} placeholder="nombre" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({Unombre:text})}/>
           

             
              <Label style={styles.lab} >Edad</Label>
              <Input style={styles.texiput} secureTextEntry={true} placeholder="Edad" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({Uedad:text})} />

              <Label style={styles.lab} >Telefono</Label>
              <Input style={styles.texiput} secureTextEntry={true} placeholder="Telefono" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({Utel:text})} />
           
              <Text style={styles.titulo}>Datos del Tutor</Text>

              <Label style={styles.lab} >Nombre Tutor</Label>
              <Input style={styles.texiput} secureTextEntry={true} placeholder="Nombre Tutor" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({Tnombre:text})} />
            
              <Label style={styles.lab} >Correo</Label>
              <Input style={styles.texiput} secureTextEntry={true} placeholder="correo" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({Tcorreo:text})} />
           
              <Label style={styles.lab}>Telefono Tutor</Label>
              <Input style={styles.texiput} secureTextEntry={true} placeholder="Telefono" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({Ttel:text})}/>
          

           <Button style={styles.bulog} block onPress={_ => this.checkLogin()}>
            <Text style={styles.resusu}> Registrar Usuario</Text>
          </Button>
          </Form>
        </Content>
        </ ImageBackground>
    )
  }
}

export default Usuario
