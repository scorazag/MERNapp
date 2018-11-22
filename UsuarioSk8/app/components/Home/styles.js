import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  heading:{
    fontSize: 30,
    textAlign:'center',
    color: 'white',
    fontSize: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    marginBottom: 20
  },
  input:{
    margin: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    width: 200,
    height: 35
  },
  parent:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  fondo: {
    flex: 1,
    width: null,
    height: null,
  },
  buttons: {
    margin: 15,
    width: 150,
    height: 35,
    alignSelf: 'center'
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 50
  }

})
