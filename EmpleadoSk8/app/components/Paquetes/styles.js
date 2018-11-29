import {StyleSheet} from 'react-native';

export default StyleSheet.create({

  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  } ,
  overlayContainer:{
    flex :1,
    backgroundColor:'rgba(0, 0, 0, 0.5)',

  
  },
  emlogo:{
    marginTop: 20,
    marginLeft:10,
    width: 150, height: 60,
   
  },
  titulo:{
    color : '#FFFFFF',
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 25
  },
  lab:{
    margin :5,
    fontSize: 18,
    color: '#FFFFFF',
  },
  texiput:{
   width :300,
   marginLeft:20,
    marginRight:20,
    backgroundColor:'rgba(229, 145, 11, 0.7)',
    borderRadius: 10,
    paddingHorizontal: 16,
    color : '#FFFFFF',
    fontSize:15,
    alignSelf: 'center'
  },
  pic:{
   width :300,
   marginLeft:20,
    marginRight:20,
    backgroundColor:'rgba(229, 145, 11, 0.7)',
    paddingHorizontal: 16,
    color : '#FFFFFF',
    alignSelf: 'center',
  },
  parent:{
    flex:1,
    justifyContent:'center'
  },
  bulog:{
    marginTop :25,
    backgroundColor: '#003366',
  },
  resusu:{
    fontSize :20,
    color:'#FFFFFF'
  }

})