import React, {Component} from 'react';
import {View,Text,Image,ImageBackground} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label,Button } from 'native-base';
import styles from './styles.js';
import DatePicker from 'react-native-datepicker';
class Agendainstructor extends Component{
  constructor(props) {
    super(props)
    this.key = 0;
    this.state = {
        time: '3:00',
        date: new Date(),
        typeEvent: '',
        dateEvent: '',
    }

}
  render(){
    return(
      < ImageBackground   style={styles.container}
      source={require('../../image/Em.jpg')} >
        <Content style={styles.overlayContainer}>
        <Image
        style={styles.emlogo}
          source={require('../../image/logo1.png')}
        />
          <Text style={styles.titulo}>Agendar de Instructor</Text>
          <Form>
           
              <Label style={styles.lab}>Nombre de Instructor</Label>
              <Input style={styles.texiput} secureTextEntry={false} placeholder="Nombre de Instructor" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({Inombre:text})}/>
              <Label style={styles.lab} >Hora</Label>

              <Input style={styles.texiput} secureTextEntry={true} placeholder="Nombre de Instructor" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({Inombre:text})}/>

              <Label style={styles.lab} >Hora</Label>
              <Input style={styles.texiput} secureTextEntry={true} placeholder="Hora" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({hora:text})} />
              <Label style={styles.lab} >Fecha</Label>
              <DatePicker   
                            style={styles.datePicker}
                            locale={'es'}
                            date={this.state.time}
                            mode="time"
                            format="HH:mm"
                            placeholder="selecione la Hora"
                            confirmBtnText="Confirmar"
                            cancelBtnText="Cancelar"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 25,
                                 },
                                dateInput: {
                                   
                                    marginLeft: 86,
                                    backgroundColor: 'rgba(229, 145, 11, 0.7)',
                                    borderRadius: 10,
                                }
                            }}
                            onDateChange={(time) => {this.setState({time: time});}}
                        />
                          
             <Label style={styles.lab} >Fecha</Label>
              <DatePicker   
                            style={styles.datePicker}
                            locale={'es'}
                            date={this.state.date}
                            mode="date"
                            placeholder="selecione la fecha"
                            format="YYYY-MM-DD"
                            minDate={this.state.date}
                            maxDate="2019-06-01"
                            confirmBtnText="Confirmar"
                            cancelBtnText="Cancelar"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 25,
                                 },
                                dateInput: {
                                   
                                    marginLeft: 86,
                                    backgroundColor: 'rgba(229, 145, 11, 0.7)',
                                    borderRadius: 10,
                                    color:'#FFFFFF'

                                }
                            }}
                            onDateChange={(date) => { this.setState({ dateEvent: date, date: date }) }}
                        />

              <Label style={styles.lab} >Fecha</Label>
              <Input style={styles.texiput} secureTextEntry={true} placeholder="Fecha" placeholderTextColor="#FFFFFF" onChangeText={text => this.setState({fecha:text})} />
    
           <Button style={styles.bulog} block onPress={_ => this.checkLogin()}>
            <Text style={styles.resusu}> Agendar Instructor</Text>
          </Button>
          </Form>
        </Content>
        </ ImageBackground>
    )
  }
}

export default Agendainstructor
