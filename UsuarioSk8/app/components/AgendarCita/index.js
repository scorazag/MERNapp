import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, Button } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

export default class AgendarCita extends Component {
  constructor(){
    super()
    this.state = {
      isVisible: false,
      fecha: '',
      hora: ''
    }
  }

  tomarClase(){
    const{fecha,hora} = this.state;
    fetch('http://172.16.12.74:3000/users/updateHisto',{
      method:'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        hora:hora,
        fecha:fecha
      }),
    })
  }


  handlePicker = (datetime) => {
    this.setState({
       isVisible: false,
       fecha: moment(datetime).format('MMM, Do YYYY'),
       hora: moment(datetime).format('HH:mm')
      });
  }

  hidePicker = () => {
    this.setState({
       isVisible: false
      });
  }

  showPicker = () =>{
    this.setState({
      isVisible: true
     });
  }

  render () {
    return (
      <View style={styles.container}>
      <Text>
        Fecha: {this.state.fecha}
      </Text>
      <Text>
        Hora : {this.state.hora}
      </Text>
        <TouchableOpacity style={styles.button} onPress={this.showPicker}>
          <Text style = {styles.text}>Show DatePicker</Text>
        </TouchableOpacity>
        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          mode = {'datetime'}
          datePickerModeAndroid = {'spinner'}
          is24Hour = {true}
        />

        <Button rounded warning block onPress={_ => this.tomarClase()} style={styles.buttons}>
          <Text> Guardar</Text>
        </Button>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor: '#330066',
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: 15
  },
  buttons: {
    margin: 15,
    width: 150,
    height: 35,
    alignSelf: 'center'
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  }
});
