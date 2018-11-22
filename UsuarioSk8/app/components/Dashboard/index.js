import React, {Component} from 'react';
import {View,Image,Text} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import styles from './styles';

class Dashboard extends Component{
    static navigationOptions = {
        header:null
    }

    entrarAgendarCita(){ this.props.navigation.navigate('AgendarCita');}
    entrarCalendario(){ this.props.navigation.navigate('Calendario');}
    entrarHistorial(){ this.props.navigation.navigate('Historial');}
    entrarPerfil(){ this.props.navigation.navigate('Perfil');}


    render(){
        const img_icon = require('../../assets/sk8_icon2.png');
        return(
            <Container>
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source = {img_icon} style = {styles.icon} />
                                <Body>
                                    <Text>Agendar Cita</Text>
                                    <Text note>Agenda tu próxima clase </Text>
                                </Body>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" onPress={_ => this.entrarAgendarCita()}/>
                            </Right>
                        </CardItem>
                    </Card>
                    {/*segunda opcion*/}
                    <Card>
                        <CardItem>
                            <Left>
                                <Icon name="calendar"/>
                                <Body>
                                    <Text>Ver el calendario</Text>
                                    <Text note>Revisa fechas disponibles</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" onPress={_ => this.entrarCalendario()}/>
                            </Right>
                        </CardItem>
                    </Card>
                    {/* tercera opcion*/}
                    <Card>
                        <CardItem>
                            <Left>
                                <Icon name="cart"/>
                                <Body>
                                    <Text>Historial</Text>
                                    <Text note>Revisa tu Hisotiral de compras</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" onPress={_ => this.entrarHistorial()}/>
                            </Right>
                        </CardItem>
                    </Card>
                    {/* Cuarta opcion*/}
                    <Card>
                        <CardItem>
                            <Left>
                                <Icon name="man"/>
                                <Body>
                                    <Text>Perfil</Text>
                                    <Text note>Revisa y actualiza tus datos personales</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" onPress={_ => this.entrarPerfil()}/>
                            </Right>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }     
}

export default Dashboard