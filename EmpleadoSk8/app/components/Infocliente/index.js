import React, {Component} from 'react';
import {View,Image,ImageBackground,Text,TouchableOpacity,TextInput} from 'react-native';
import { Container, Header, Content,Body, Form, Item, Input, Label,Button,Card,CardItem,Thumbnail,Icon,Left,Right } from 'native-base';
import styles from './styles.js';




class Infocliente extends Component{


    entrarClieninfo(){  this.props.navigation.navigate('clieninfo');}

  render(){
    const img_icon = require('../../image/incousuario.png');
    const img = require('../../image/fonem.jpg');
    const header = require('../../image/fonem.jpg');
    var Usuario = 'Uskudar';
    return(
     <Container style={styles.container}>
        <Content style={styles.overlayContainer}>
        <Image
      style={styles.emlogo}
        source={require('../../image/logo1.png')}
      />
      
        <Text style={styles.titulo}>Clientes Registrados</Text>

        <Card style={styles.card}>
            <CardItem style={styles.card}>
                    <Left>
                        <Image style={styles.avatar} source={img_icon}/> 
                    </Left> 
                 <Body>
                     <Right>      
                        <Text style={styles.info}>Nombre de usuario</Text>
                        <Text style={styles.name}>{Usuario}</Text>
                        <Text style={styles.description}>Información del usuario</Text>
                        <Text style={styles.description}>Corre:RadcelaSaelCoarazaEduardo@gmail.com</Text>
                        <Text style={styles.description}>Edad: 25</Text>
                    </Right>
                  </Body>
             </CardItem>
      </Card>
        <Card>
                      <CardItem>
                          <Left>
                          <Icon name="person" />
                          <Body>
                                  
                                  <Text note>Paquete Contratado</Text>
                                  <Text>Paquete de 4 Clases</Text>
                           </Body>
                          </Left>
                      </CardItem>
                      <CardItem>
                      <Body>
                             <Text note>Clase Tomadas : 2</Text>
                             <Text note>Clase Restante : 2</Text>
                             
                     </Body>
                     </CardItem>
      </Card>
      <Card>
                      <CardItem>
                          <Left>
                          <Icon name="person" />
                          <Body>
                                  
                                  <Text note>Paquete Contratado</Text>
                                  <Text>Paquete de 4 Clases</Text>
                           </Body>
                          </Left>
                      </CardItem>
                      <CardItem>
                      <Body>
                             <Text note>Clase Tomadas : 2</Text>
                             <Text note>Clase Restante : 2</Text>
                             
                     </Body>
                     </CardItem>
      </Card>
      <Card>
                      <CardItem>
                          <Left>
                          <Icon name="person" />
                          <Body>
                                  
                                  <Text note>Paquete Contratado</Text>
                                  <Text>Paquete de 4 Clases</Text>
                           </Body>
                          </Left>
                      </CardItem>
                      <CardItem>
                      <Body>
                             <Text note>Clase Tomadas : 2</Text>
                             <Text note>Clase Restante : 2</Text>
                             
                     </Body>
                     </CardItem>
      </Card>
      <Card>
                      <CardItem>
                          <Left>
                          <Icon name="person" />
                          <Body>
                                  
                                  <Text note>Paquete Contratado</Text>
                                  <Text>Paquete de 4 Clases</Text>
                           </Body>
                          </Left>
                      </CardItem>
                      <CardItem>
                      <Body>
                             <Text note>Clase Tomadas : 2</Text>
                             <Text note>Clase Restante : 2</Text>
                             
                     </Body>
                     </CardItem>
      </Card>
      <Card>
                      <CardItem>
                          <Left>
                          <Icon name="person" />
                          <Body>
                                  
                                  <Text note>Paquete Contratado</Text>
                                  <Text>Paquete de 4 Clases</Text>
                           </Body>
                          </Left>
                      </CardItem>
                      <CardItem>
                      <Body>
                             <Text note>Clase Tomadas : 2</Text>
                             <Text note>Clase Restante : 2</Text>
                             
                     </Body>
                     </CardItem>
      </Card>      
      <Card>
                      <CardItem>
                         
                      <Left>
                          <Form>
                            <TextInput  editable={false} selectTextOnFocus={false}  />
                              <Button style={styles.buttonContainer} onPress={_ => this.entrarClieninfo()} >
                                <Text>Actualizar</Text>
                                </Button>
                            </Form>
                          </Left>
                          <Body>
                         
                          <Right>
                          <Form>
                            <TextInput  editable={false} selectTextOnFocus={false}  />
                              <Button  style={styles.buttonContainer2} onPress={_ => this.entrarClieninfo()} >
                                <Text>Eliminar</Text>
                                </Button>
                            </Form>   
                          </Right>       
                           </Body>
                          
                      </CardItem>
                      
      </Card>   
                         
                           
                           
                          
     
      </Content>
      </Container>
                
       
        
     
    )
  }
}





export default Infocliente
