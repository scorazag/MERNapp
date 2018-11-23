import React, {Component} from 'react';
import {View,Image,Text,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import styles from './styles.js';
export default class AgendarCita extends Component {

  render() {
    const img_icon = require('../../assets/sk8_icon2.png');
    const header = require('../../assets/sk8_f4.jpg');
    var Usuario = 'Uskudar';
    
    return (
      <View style={styles.container}>
          <Image source={header} style={styles.header}/>
          <Image style={styles.avatar} source={img_icon}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>{Usuario}</Text>
              <Text style={styles.info}>Tipo de usuario</Text>
              <Text style={styles.description}>Información del usuario</Text>
              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Actualizar Información</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Cambiar Imagen</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

