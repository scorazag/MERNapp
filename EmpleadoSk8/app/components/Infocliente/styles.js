import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null, height: null,
  },
  overlayContainer:{
    flex :1,
    
    width : 410,
  },
  titulo:{
    color : '#000000',
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 25
  },
  card:{
    backgroundColor :'rgba(229, 145, 11, 0.7)'
},
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:150,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  buttonContainer2: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:150,
    borderRadius:30,
    backgroundColor: "red",
  },

    emlogo:{
      marginTop: 20,
      marginRight:10,
      width: 150, height: 60,
     
    },
  sear:{
    
      color:"black"
  },
  
    icon: {
      width: 50,
      height: 50,
      
    },
    bannerCat: {
      height: 300, 
      width: null, 
      flex: 1
    },
   
  

})