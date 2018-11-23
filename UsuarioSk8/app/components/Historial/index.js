import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import styles from './styles';

export default class Historial extends Component {
  render() {
      const img = require('../../assets/sk8_f9.jpg');
      const img_icon = require('../../assets/sk8_icon2.png');
    return (
      <Container>
        <Header />
        <Content>
          <Card style={styles.tarjeta}>
            <CardItem>
              <Left>
                <Thumbnail source={img_icon} />
                <Body>
                  <Text>Venta</Text>
                  <Text note>Fecha de la venta</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={img} style={styles.bannerCat}/>
                <Text>
                  Descripción de la venta realizada
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={styles.boton}>
                  <Icon name="cart" />
                  <Text>Costo</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

