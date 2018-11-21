import React, {Component} from 'react';
import {View,Image,Text} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';

class Dashboard extends Component{
    static navigationOptions = {
        header:null
    }

    entrarAgendarCita(){ this.props.navigation.navigate('AgendarCita');}
    entrarCalendario(){ this.props.navigation.navigate('Calendario');}
    entrarHistorial(){ this.props.navigation.navigate('Historial');}
    entrarPerfil(){ this.props.navigation.navigate('Perfil');}


    render(){
        return(
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Agendar Cita</Text>
                                    <Text note>Agenda tu proxima clase </Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Button rounded block onPress={_ => this.entrarAgendarCita()} color='#ff6600'>
                                    <Text> Entrar</Text>
                                </Button>
                            </Body> 
                        </CardItem>
                    </Card>
                    {/*segunda opcion*/}
                    <Card>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Ver el calendario</Text>
                                    <Text note>Revisa fechas disponibles</Text>
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
                    {/* tercera opcion*/}
                    <Card>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Historial</Text>
                                    <Text note>Revisa tu Hisotiral de compras</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Button rounded block onPress={_ => this.entrarHistorial()} color='#ff6600'>
                                    <Text> Entrar</Text>
                                </Button>
                            </Body> 
                        </CardItem>
                    </Card>
                    {/* Cuarta opcion*/}
                    <Card>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Perfil</Text>
                                    <Text note>Revisa tus datos asi como las clases que te quedan</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Button rounded block onPress={_ => this.entrarPerfil()} color='#ff6600'>
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