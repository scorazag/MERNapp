import React, {Component} from 'react';
import {View,Image,Text} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import styles from './styles';
class Dashboard extends Component{
    static navigationOptions = {
        header:null
    }
    
    entrarUsuario(){  this.props.navigation.navigate('usuario');}
    entrarTutor(){  this.props.navigation.navigate('instructor');}
    entrarCalendario(){  this.props.navigation.navigate('calendario');}
    entrarPaquete(){  this.props.navigation.navigate('paquetes');}
    entrarClientes(){  this.props.navigation.navigate('clientes');}
    
    render(){
        const img_icon = require('../../image/logo1.png');
      
        const img_1 = require('../../image/fonloem.jpg');
        const img_2 = require('../../image/Em.jpg');
        const img_3 = require('../../image/cliente.jpg');
        const img_4 = require('../../image/patineta.jpg');
        const img_5 = require('../../image/fonem.jpg');
        return(
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                            <Icon name="person" />
                                <Body>
                                    <Text>Usuario</Text>
                                    <Text note>Dar de alta aun usuario</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" onPress={_ => this.entrarUsuario()}/>
                            </Right>
                        </CardItem>
                        <CardItem>
                        <Image source={img_2} style={styles.bannerCat}/>
                        </CardItem>
                    </Card>
                    {/*Seugnda opcion menu*/}
                    <Card>
                        <CardItem>
                            <Left>
                            <Icon name="man" />
                            <Body>
                                    <Text>Instructor</Text>
                                    <Text note>Dar de alta a un Instructor</Text>
                           </Body>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" onPress={_ => this.entrarTutor()}/>
                            </Right>
                        </CardItem>
                        <CardItem>
                        <Image source={img_3} style={styles.bannerCat}/>
                        </CardItem>
                    </Card>
                    
                    {/*Tercera opcion menu*/}
                    <Card>
                        <CardItem>
                            <Left>
                            <Icon name="calendar" />
                            <Body>
                                    <Text>Calendario</Text>
                                    <Text note>Ver Calendario de clases</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" onPress={_ => this.entrarCalendario()}/>
                            </Right>
                        </CardItem>
                        <CardItem>
                        <Image source={img_4} style={styles.bannerCat}/>
                        </CardItem>
                    </Card>
                    
                    {/*Cuarta opcion menu*/}
                    <Card>
                        <CardItem>
                            <Left>
                            <Icon name="book" />
                            <Body>
                                    <Text>Paquete</Text>
                                    <Text note>Alta de un paquete a usuario registrado</Text>
                             </Body>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" onPress={_ => this.entrarPaquete()}/>
                            </Right>
                        </CardItem>
                        <CardItem>
                        <Image source={img_1} style={styles.bannerCat}/>
                        </CardItem>
                    </Card>
                    {/*Quinta opcion menu*/}
                    <Card>
                        <CardItem>
                            <Left>
                            <Icon name="people" />
                            <Body>
                                    <Text>Clientes</Text>
                                    <Text note>Informacion del cliente</Text>
                             </Body>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" onPress={_ => this.entrarClientes()}/>
                            </Right>
                        </CardItem>
                        <CardItem>
                        <Image source={img_5} style={styles.bannerCat}/>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
  

}

export default Dashboard