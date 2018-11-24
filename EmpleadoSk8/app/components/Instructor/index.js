import React, {Component} from 'react';

import {View,Text,Image,ImageBackground} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button } from 'native-base';
import styles from './styles'
import {View,Text} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button } from 'native-base';
class Instructor extends Component{

  constructor(props){
    super(props)
    this.state = {
      nombre:'',
      email:'',
      celular:''
    }
  }

  registarTutor (){
    const {nombre } = this.state
    const {celular} = this.state
    const {email} = this.state

    if( nombre == '' || celular == '' || email == ''){
      alert("faltan campos")
    }
    else{
      alert("entrando al else")
      fetch('http://10.0.0.19:3000/tutores/register',{
        method:'POST',
        headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          nombre:nombre,
          celular:celular,
          email:email
        })
      })
      .then((response) => response.json)
      .then((responseJson) =>{
        alert(responseJson)
      })
      .catch((error) => {
        console.error(error)
      })
    }
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
          <Text style={styles.titulo}>Registro de Tutor</Text>
          <Form>
           
              <Label style={styles.lab}>Nombre</Label>
              <Input style={styles.texiput} secureTextEntry={true} placeholder="nombre" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({nombre:text})}/>
           

            
              <Label style={styles.lab} >Edad</Label>
              <Input style={styles.texiput} secureTextEntry={true} placeholder="Edad" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({edad:text})} />
            
           
              <Label style={styles.lab} >Correo</Label>
              <Input style={styles.texiput} secureTextEntry={true} placeholder="correo" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({correo:text})} />
           
              <Label style={styles.lab}>Telefono</Label>
              <Input style={styles.texiput} secureTextEntry={true} placeholder="Telefono" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({tel:text})}/>
           

           <Button style={styles.bulog} block onPress={_ => this.checkLogin()}>
            <Text style={styles.resusu}> Registrar Tutor</Text>
          </Button>
            <Item stackedLabel>
              <Label>Nombre</Label>
              <Input  onChangeText={text => this.setState({nombre:text})} />
            </Item>

            <Item stackedLabel last>
              <Label>Edad</Label>
              <Input  />
            </Item>
            <Item stackedLabel last>
              <Label>Correo</Label>
              <Input  onChangeText={text => this.setState({email:text})}/>
            </Item>
            <Item stackedLabel last>
              <Label>Telefono</Label>
              <Input  onChangeText={text => this.setState({celular:text})}/>
            </Item>

          </Form>
          <Button rounded block  onPress={_ => this.registarTutor()}   color='#ff6600'>
              <Text> Entrar</Text>
            </Button> 
        </Content>
        </ ImageBackground>

    )
  }
}

export default Instructor

//onPress={_ => this.registarTutor()}