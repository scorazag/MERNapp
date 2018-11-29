import React, {Component} from 'react';
import {View,Image,Text,TouchableOpacity, AsyncStorage} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import styles from './styles.js';
export default class AgendarCita extends Component {
  constructor(){
    super()
    this.state = {
      nombre:'',
      correo: '',
      edad:'',
      celular:'',
      nombreTutor:'',
      telefonoTutor:''
    } 
    AsyncStorage.getItem('usuario').then((value) =>{
      if (value !== null) {
        myobj = JSON.parse(value);
        this.setState({nombre:myobj.nombre});
        this.setState({correo:myobj.email});
        this.setState({edad:myobj.edad});
        this.setState({celular:myobj.celular});
        this.setState({nombreTutor:myobj.nombreTutor});
        this.setState({telefonoTutor:myobj.telefonoTutor});
    }

    });
      
  }
  render() {
    const img_icon = require('../../assets/sael.jpg');
    const header = require('../../assets/sk8_f4.jpg');
    
    return (
      <View style={styles.container} on>
          <Image source={header} style={styles.header}/>
          <Image style={styles.avatar} source={img_icon}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{this.state.nombre}</Text>
              <Text style={styles.info}>{this.state.correo}</Text>
              <Text style={styles.description}>{this.state.edad}</Text>
              <Text style={styles.description}>{this.state.celular}</Text>
              <Text style={styles.tutor}>{this.state.nombreTutor}</Text>
              <Text style={styles.description}>{this.state.telefonoTutor}</Text>
            </View>
        </View>
      </View>
    );
  }
}

