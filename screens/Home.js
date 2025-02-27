import { StyleSheet, Text, View, Image,FlatList ,SafeAreaView,  Touchable, TouchableOpacity,} from 'react-native';
import {react, useEffect,useState}  from 'react';
import styles from '../styles/HomeStyles';

export default function Home({navigation}){
  const [productos,setProductos]= useState([]);  
  useEffect(() => { 
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json()) 
    .then(data => {   
      setProductos(data);  
    })
    .catch(error => console.error(" Error al obtener productos:", error));
        },[]);
  
  
  return(
  <View>  
    <SafeAreaView >
  <FlatList 
  data={productos} 
  keyExtractor={(item) => item.id.toString()} 
  renderItem={({ item }) => ( 
    <TouchableOpacity       style={styles.p} 
      onPress={() => navigation.navigate('Productos', { producto: item })}>

      <Image source={{ uri: item.image }} style={styles.imagen}/>    
      <Text style={styles.tituloProducto}>{item.title}</Text>
      <Text style={styles.precio}>{item.price}</Text>
    </TouchableOpacity>
  )}  
/>

     
    </SafeAreaView>
    </View>
);
}
  
//}<> 





