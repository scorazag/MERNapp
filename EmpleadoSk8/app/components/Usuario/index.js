import React, {Component} from 'react';

import {View,Text,Image,ImageBackground,keyboardType,Picker} from 'react-native';

import { Container, Header, Content, Form, Item, Input, Label,Button } from 'native-base';
import styles from './styles.js';
class Usuario extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      state: 'paquete'
    }
  }
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

              <Input style={styles.texiput} secureTextEntry={false} placeholder="nombre" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({Unombre:text})}/>

           

             
              <Label style={styles.lab} >Edad</Label>

              <Input style={styles.texiput} secureTextEntry={false} placeholder="Edad" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({Uedad:text})} />

              <Label style={styles.lab} >Telefono</Label>
              <Input style={styles.texiput} secureTextEntry={false} placeholder="Telefono" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({Utel:text})} />
              
              <Label style={styles.lab} >Correo</Label>
              <Input style={styles.texiput} secureTextEntry={false} keyboardType='email-address' placeholder="correo" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({Tcorreo:text})} />
           
              <Label style={styles.lab}>Selecione el # de clases</Label>
                <Picker mode="dropdown"   style={styles.pic}
                placeholder="# de clases" placeholderStyle={{ color: "#FFFFFF" }}  placeholderIconColor="#FFFFFF"
                selectedValue={this.state.language}
                onValueChange={(lang) => this.setState({language: lang})}>

                    <Picker.Item label="Paquete de 4 Clases" value="4" />
                    <Picker.Item label="Paquete de 8 Clases" value="8" />
                </Picker>
              <Text style={styles.titulo}>Datos del Tutor</Text>

              <Label style={styles.lab} >Nombre Tutor</Label>
              <Input style={styles.texiput} secureTextEntry={false} placeholder="Nombre Tutor" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({Tnombre:text})} />
            
        
              <Label style={styles.lab}>Telefono Tutor</Label>
              <Input style={styles.texiput} secureTextEntry={false} placeholder="Telefono Tutor" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({Ttel:text})}/>

          

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
