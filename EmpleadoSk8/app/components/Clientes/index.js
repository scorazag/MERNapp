import React, {Component} from 'react';
import {View,Text,Image,ImageBackground,TextInput} from 'react-native';
import { Container, Header, Content,Body,Card,CardItem,Left,Right,Thumbnail,Icon, Form, Item, Input, Label,Button } from 'native-base';
import styles from './styles.js';
class Clientes extends Component{

  constructor(){
    super()
    this.state={
      data:[]
    }
  }

  componentDidMount(){
    const data = []
    return fetch('http://192.168.43.84:3000/users/getTodosUsuarios')
      .then((response) => response.json())
      .then((responseJson) => {
        obj = JSON.stringify(responseJson)
        obj1 = JSON.parse(obj)
        alert(obj1)

      })
      .catch((error) =>{
        alert(error);
      });
  }

  entrarInfocliente(){  this.props.navigation.navigate('infocliente');}

  render(){
    return(
      <ImageBackground   style={styles.container}
        source={require('../../image/fonem.jpg')} >
          <Content style={styles.overlayContainer}>
        <Image
        style={styles.emlogo}
          source={require('../../image/logo1.png')}
        />
          <Text style={styles.titulo}>Clientes Registrados</Text>

           {/*Buscador*/}
          <Card style={styles.card}>
            <CardItem style={styles.card}>
              <Body>
                {/*Buscador del cliente*/}
                <TextInput style={styles.texiput} placeholder="Buscar Cliente" onChangeText={text => this.setState({buscar:text})}/>
              </Body>
              <Right>
                <Icon name="search" style = {styles.sear} />
              </Right>
           </CardItem>
        </Card>
         {/*Clientes*/}
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
                            {/*Formulario para enviar el id del cliente*/}
                            <Form>
                               {/*input donde se guarda el id del cliente*/}

                              <TextInput editable={false} selectTextOnFocus={false} onChangeText={text => this.setState({Unombre:text})} />
                              <Button onPress={_ => this.entrarInfocliente()} >
                                <Text style={{color:'#FFFFFF',padding: 8}}>Ver Informacion</Text>
                                </Button>
                            </Form>

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
