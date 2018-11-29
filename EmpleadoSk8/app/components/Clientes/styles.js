import {StyleSheet} from 'react-native';

export default StyleSheet.create({

  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
   } ,
  overlayContainer:{
    flex :1,
    backgroundColor:'rgba(0,0,0,0.4)'

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
sear:{
   marginLeft:10,
    color:"black"
},

  icon: {
    width: 50,
    height: 50,
    
  },
  bannerCat: {
    height: 200, 
    width: null, 
    flex: 1
  },
  card:{
      width:340,
   backgroundColor :'rgba(229, 145, 11, 0.7)'
  },
  
 texiput:{
    width :280,
    marginLeft:140,
    marginRight:20,
    backgroundColor:'#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 16,
    color : '#0D47A1',
    fontSize:15,
    alignSelf: 'center'
  },
  


})