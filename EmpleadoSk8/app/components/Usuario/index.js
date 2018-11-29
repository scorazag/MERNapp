import React, {Component} from 'react';

import {View,Text,Image,ImageBackground,keyboardType,Picker} from 'react-native';

import { Container, Header, Content, Form, Item, Input, Label,Button } from 'native-base';
import styles from './styles.js';
class Usuario extends Component{

  constructor(props) {
    super(props);
    this.state = {
      nombre:'',
      email:'',
      celular:'',
      edad:'',
      nombreTutor:'',
      telefonoTutor:'',
      paquete:0
    }
  }
  registroUsuario(){
    const{nombre} = this.state
    const{email} = this.state
    const{celular} = this.state
    const{edad} = this.state
    const{paquete}=this.state
    const{nombreTutor} = this.state
    const{telefonoTutor} = this.state

    if(nombre == '' || email == '' || celular == '' || edad == ''){
       alert("Faltan campos ");
    }else{
      fetch('http://192.168.43.84:3000/users/register',{
        method:'POST',
        headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          nombre:nombre,
          email:email,
          celular:celular,
          edad:edad,
          paquete:paquete,
          nombreTutor:nombreTutor,
          password:'skatopia',
          telefonoTutor:telefonoTutor
        })
      })
      .then((response) => response.json())
      .then((responseJson) =>{
        alert(JSON.stringify(responseJson))
      })
    .catch((error) => {
      console.error(error)
    })

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
              <Input style={styles.texiput} secureTextEntry={false} placeholder="nombre" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({nombre:text})}/>
              <Label style={styles.lab} >Edad</Label>
              <Input style={styles.texiput} secureTextEntry={false} placeholder="Edad" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({edad:text})} />
              <Label style={styles.lab} >Telefono</Label>
              <Input style={styles.texiput} secureTextEntry={false} placeholder="Telefono" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({celular:text})} />
              <Label style={styles.lab} >Correo</Label>
              <Input style={styles.texiput} secureTextEntry={false} keyboardType='email-address' placeholder="correo" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({email:text})} />
              <Label style={styles.lab}>Selecione el # de clases</Label>
                <Picker mode="dropdown"   style={styles.pic}
                placeholder="# de clases" placeholderStyle={{ color: "#FFFFFF" }}  placeholderIconColor="#FFFFFF"
                selectedValue={this.state.paquete}
                onValueChange={(itemValue,itenIndex) => this.setState({paquete: itemValue})}>

                    <Picker.Item label="Paquete de 4 Clases" value="4" />
                    <Picker.Item label="Paquete de 8 Clases" value="8" />
                </Picker>
              <Text style={styles.titulo}>Datos del Tutor</Text>
              <Label style={styles.lab} >Nombre Tutor</Label>
              <Input style={styles.texiput} secureTextEntry={false} placeholder="Nombre Tutor" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({nombreTutor:text})} />
              <Label style={styles.lab}>Telefono Tutor</Label>
              <Input style={styles.texiput} secureTextEntry={false} placeholder="Telefono Tutor" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({telefonoTutor:text})}/>
           <Button style={styles.bulog} block onPress={_ => this.registroUsuario()}>
            <Text style={styles.resusu}> Registrar Usuario</Text>
          </Button>
          </Form>
        </Content>
        </ ImageBackground>
    )
  }
}

export default Usuario
