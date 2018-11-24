import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import Home from './app/components/Home';
import Dashboard from './app/components/Dashboard';
import Usuario from './app/components/Usuario';
import Instructor from './app/components/Instructor';
import Paquetes from './app/components/Paquetes';
import Calendario from './app/components/Calendario';
import Clientes from './app/components/Clientes';


export default createStackNavigator({
  home:Home,
  dashoard:Dashboard,
  usuario:Usuario,
  instructor:Instructor,
  paquetes:Paquetes,
  calendario:Calendario,
  clientes:Clientes,
})
