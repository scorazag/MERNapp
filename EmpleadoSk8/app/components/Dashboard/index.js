import React, {Component} from 'react';
import {View,Image,Text} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

class Dashboard extends Component{
  entrarUsuario(){  this.props.navigation.navigate('usuario');}
  entrarTutor(){  this.props.navigation.navigate('instructor');}
  entrarCalendario(){  this.props.navigation.navigate('calendario');}
  entrarPaquete(){  this.props.navigation.navigate('paquetes');}
  render(){
    return(
      <Container >
        <Content>
          <Button full light onPress={_ => this.entrarUsuario()}>
            <Text>Registro Usuario</Text>
          </Button>
          <Button full onPress={_ => this.entrarTutor()}>
            <Text>Registro Tutor</Text>
          </Button>
          <Button full success onPress={_ => this.entrarCalendario()}>
            <Text>Calendario</Text>
          </Button>
          <Button full info onPress={_ => this.entrarPaquete()}>
            <Text>Cobrar Paquete</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default Dashboard
