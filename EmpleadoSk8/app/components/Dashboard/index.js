import React, {Component} from 'react';
import {View,Image,Text} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

class Dashboard extends Component{
    static navigationOptions = {
        header:null
    }
    
    entrarUsuario(){  this.props.navigation.navigate('usuario');}
    entrarTutor(){  this.props.navigation.navigate('instructor');}
    entrarCalendario(){  this.props.navigation.navigate('calendario');}
    entrarPaquete(){  this.props.navigation.navigate('paquetes');}
    
    render(){
        return(
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Usuario</Text>
                                    <Text note>Dar de alta aun usuario</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Button rounded block onPress={_ => this.entrarUsuario()} color='#ff6600'>
                                    <Text> Entrar</Text>
                                </Button>
                            </Body> 
                        </CardItem>
                    </Card>
                    {/*Seugnda opcion menu*/}
                    <Card>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Tutor</Text>
                                    <Text note>Dar de alta a un tutor</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Button rounded block onPress={_ => this.entrarTutor()} color='#ff6600'>
                                    <Text> Entrar</Text>
                                </Button>
                            </Body> 
                        </CardItem>
                    </Card>
                    {/*Tercera opcion menu*/}
                    <Card>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Calendario</Text>
                                    <Text note>Ver Calendario de clases</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Button rounded block onPress={_ => this.entrarCalendario()} color='#ff6600'>
                                    <Text> Entrar</Text>
                                </Button>
                            </Body> 
                        </CardItem>
                    </Card>
                    {/*Cuarta opcion menu*/}
                    <Card>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Paqueta</Text>
                                    <Text note>Alta de un paquete a usuario registrado</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Button rounded block onPress={_ => this.entrarPaquete()} color='#ff6600'>
                                    <Text> Entrar</Text>
                                </Button>
                            </Body> 
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
  

}

export default Dashboard