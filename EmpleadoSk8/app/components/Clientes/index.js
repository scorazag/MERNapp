import React, {Component} from 'react';
import {View,Text,Image,ImageBackground} from 'react-native';
import { Container, Header, Content,Body,Card,CardItem,Left,Right,Thumbnail,Icon, Form, Item, Input, Label,Button } from 'native-base';
import styles from './styles'
class Clientes extends Component{
  render(){
   
    return(
        < ImageBackground   style={styles.container}
        source={require('../../image/fonem.jpg')} >
          <Content style={styles.overlayContainer}>
        <Image
        style={styles.emlogo}
          source={require('../../image/logo1.png')}
        />
          <Text style={styles.titulo}>Clientes Registrados</Text>
          <Card style={styles.card}>
                        <CardItem style={styles.card}>
                           
                            <Body>
                                    <Input style={styles.texiput} placeholder="Buscar Cliente" />
                             </Body>
                            
                            <Right>
                                <Icon name="search" style = {styles.sear} />
                            </Right>
                        </CardItem>
                        
        </Card>
          <Card>
                        <CardItem>
                            <Left>
                            <Icon name="person" />
                            <Body>
                                    <Text>Clientes</Text>
                                    <Text note>Informacion del cliente</Text>
                             </Body>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem>
                        <Text>Cliente : Pantro Sael Radcela Coraza Johan</Text>
                       </CardItem>
        </Card>
        <Card>
                        <CardItem>
                            <Left>
                            <Icon name="person" />
                            <Body>
                                    <Text>Clientes</Text>
                                    <Text note>Informacion del cliente</Text>
                             </Body>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem>
                        <Text>Cliente : Pantro Sael Radcela Coraza Johan</Text>
                       </CardItem>
        </Card>
        <Card>
                        <CardItem>
                            <Left>
                            <Icon name="person" />
                            <Body>
                                    <Text>Clientes</Text>
                                    <Text note>Informacion del cliente</Text>
                             </Body>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </CardItem>
                        <CardItem>
                        <Text>Cliente : Pantro Sael Radcela Coraza Johan</Text>
                       </CardItem>
        </Card>
        </Content>
        </ ImageBackground>
                
    )
  }
}

export default Clientes
