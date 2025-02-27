import { StyleSheet } from 'react-native';
const styles= StyleSheet.create({  
    safeArea:{
      backgroundColor: '#F5F5F5',
      flex:1,
    },
  
    tituloProducto:{
      color:"#343A40",
      fontSize: 15,
      textAlign: "center",
  
      
    },
  
    precio:{
      color: "black",
      fontSize: 15,
      fontWeight: "700",
      marginTop: 5,
      textAlign: "center",
  
  
    },
    p:{
      width: '100%', 
      alignItems: 'center', 
      marginBottom: 20,
      padding: 15,
      backgroundColor: '#EDEDED', 
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
  
    },
    
    imagen:{
      width: 100,
      height:100,
      borderRadius:10,
      marginBottom: 10,
  
    }, 
  
  
  });
  export default styles;