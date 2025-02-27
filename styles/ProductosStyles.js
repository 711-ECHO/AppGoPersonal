import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      padding: 20,
      alignItems: 'center',
    },
    imagen: {
      width: 150,
      height: 150,
      marginBottom: 10,
    },
    nombre: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    precio: {
      fontSize: 18,
      color: 'black',
    },
    descripcion: {
      textAlign: 'center',
      marginVertical: 10,
  
    },
    categoria: {
      marginBottom:15,
      fontSize: 14,
      color: 'gray',
    },
    boton:{
      backgroundColor: "#DC3545", 
      paddingVertical: 12,  
      paddingHorizontal: 20, 
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      width: "60%",  
      maxWidth: 250, 
      marginVertical: 20, 
      alignSelf: "center", 
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      shadowRadius: 4,
    },
    colorbotoncito:{
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
  
  
    },
  
  });
  export default styles;