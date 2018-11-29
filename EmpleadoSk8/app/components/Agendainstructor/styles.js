import {StyleSheet} from 'react-native';

export default StyleSheet.create({

  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
    
    
  } ,
  overlayContainer:{
    flex :1,
    backgroundColor:'rgba(0, 0, 0, 0.4)',
   
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
    color : '#0D47A1',
    fontSize:15,
    alignSelf: 'center'
  },
  
  parent:{
    flex:1,
    justifyContent:'center'
  },
  
  titulo:{
    color : '#FFFFFF',
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 25
  },
  emlogo:{
    marginTop: 20,
    marginLeft:10,
    width: 150, height: 60,
   
  },
  datePicker: {
    height: 60,
    width: 300,
    marginTop: 20,
    paddingHorizontal: 10,
    


},
picker: {
    width: 330,
    marginTop: 20,
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