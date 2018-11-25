import React, {Component} from 'react';
import {View,Text,Image,ImageBackground} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button } from 'native-base';
import styles from './styles'
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
          </Form>
        </Content>
        </ ImageBackground>

    )
  }
}

export default Instructor
