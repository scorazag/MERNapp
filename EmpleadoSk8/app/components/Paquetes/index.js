import React, {Component} from 'react';
import {View,Text} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Picker } from 'native-base';

class Paquetes extends Component{

  render(){
    return(
      <Container>
        <Content>
          <Form>
            <Item stackedLabel>
            <Label>Correo</Label>
            <Input />
            </Item>
            <Label># de clases</Label>
            <Picker mode="dropdown"    style={{ width: undefined }}
             placeholder="# de clases" placeholderStyle={{ color: "#bfc6ea" }}  placeholderIconColor="#007aff"
            >

            <Picker.Item label="4" value="key0" />
            <Picker.Item label="8" value="key1SS" />
            </Picker>
          </Form>
        </Content>
      </Container>
    )
  }
}

export default Paquetes
