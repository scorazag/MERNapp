import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Home from './app/components/Home';
import Dashboard from './app/components/Dashboard';
import AgendarCita from './app/components/AgendarCita';
import Calendario from './app/components/Calendario';
import Historial from './app/components/Historial';
import Perfil from './app/components/Perfil';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Dashboard:Dashboard,
    AgendarCita:AgendarCita,
    Calendario:Calendario,
    Historial:Historial,
    Perfil:Perfil
  },
  {initialRouteName: "Home"} 
);

export default createAppContainer(AppNavigator);