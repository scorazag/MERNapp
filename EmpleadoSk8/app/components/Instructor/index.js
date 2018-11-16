import React, {Component} from 'react';
import {View,Text} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';

class Instructor extends Component{
  render(){
    return(
      <Container>
        <Header />
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Nombre</Label>
              <Input />
            </Item>

            <Item stackedLabel last>
              <Label>Edad</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Correo</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
              <Label>Telefono</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>

    )
  }
}

export default Instructor
