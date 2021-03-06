import React, {Component} from 'react';
import {View,Text,Image,ImageBackground} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button } from 'native-base';
import styles from './styles.js';



class Instructor extends Component{

  constructor(props){
    super(props)
    this.state = {
      nombre:'',
      email:'',
      celular:'',
      edad:''
    }
  }

  registarTutor (){
    const {nombre } = this.state
    const {celular} = this.state
    const {email} = this.state
    const {edad} = this.state

      alert("entrando al else")
      fetch('http://192.168.43.84:3000/tutores/register',{
        method:'POST',
        headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          nombre:nombre,
          celular:celular,
          email:email,
          edad:edad
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
              <Input style={styles.texiput} secureTextEntry={false} placeholder="nombre" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({nombre:text})}/>

             <Label style={styles.lab} >Edad</Label>
              <Input style={styles.texiput} secureTextEntry={false} placeholder="Edad" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({edad:text})} />
              <Label style={styles.lab} >Correo</Label>
              <Input style={styles.texiput} secureTextEntry={false} placeholder="correo" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({email:text})} />

              <Label style={styles.lab}>Telefono</Label>
              <Input style={styles.texiput} secureTextEntry={false} placeholder="Telefono" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({celular:text})}/>


           <Button style={styles.bulog} block onPress={_ => this.registarTutor()}>
            <Text style={styles.resusu}> Registrar Instructor</Text>
          </Button>

        </Form>
      </Content>
      </ImageBackground>
    )
  }
}

export default Instructor
