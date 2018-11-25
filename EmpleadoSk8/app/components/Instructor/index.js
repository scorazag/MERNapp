import React, {Component} from 'react';
import {View,Text} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button } from 'native-base';

class Instructor extends Component{

  constructor(props){
    super(props)
    this.state = {
      nombre:'',
      email:'',
      celular:''
    }
  }

  registarTutor (){
    const {nombre } = this.state
    const {celular} = this.state
    const {email} = this.state

    if( nombre == '' || celular == '' || email == ''){
      alert("faltan campos")
    }
    else{
      alert("entrando al else")
      fetch('http:// 192.168.1.73:3000/tutores/register',{
        method:'POST',
        headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({
          nombre:nombre,
          celular:celular,
          email:email
        })
      })
      .then((response) => response.json())
        .then((responseJson) =>{
          alert(responseJson)
        })
      .catch((error) => {
        console.error(error)
      })
    }
  }


  render(){
    return(
      <Container>
        <Header />
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Nombre</Label>
              <Input  onChangeText={text => this.setState({nombre:text})} />
            </Item>

            <Item stackedLabel last>
              <Label>Edad</Label>
              <Input  />
            </Item>
            <Item stackedLabel last>
              <Label>Correo</Label>
              <Input  onChangeText={text => this.setState({email:text})}/>
            </Item>
            <Item stackedLabel last>
              <Label>Telefono</Label>
              <Input  onChangeText={text => this.setState({celular:text})}/>
            </Item>
          </Form>
          <Button rounded block  onPress={_ => this.registarTutor()}   color='#ff6600'>
              <Text> Entrar</Text>
            </Button>
        </Content>
      </Container>

    )
  }
}

export default Instructor

//onPress={_ => this.registarTutor()}
