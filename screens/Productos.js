import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet,Platform } from 'react-native';
import styles from '../styles/ProductosStyles';



export default function Productos({ route }) {
    const { producto } = route.params; 
  
    
    
    const agregarAlCarrito = () => {
    if (Platform.OS=='web'){
        window.alert("Producto agregado al carrito");s
    }
    else{
        Alert.alert("Producto agregado al carrito");
        }
    };
  
    return (
      <View style={styles.container}>
        <Image source={{ uri: producto.image }} style={styles.imagen} />
        <Text style={styles.nombre}>{producto.title}</Text>
        <Text style={styles.precio}>${producto.price}</Text>
        <Text style={styles.descripcion}>{producto.description}</Text>
        <Text style={styles.categoria}>Categoría: {producto.category}</Text>
        <TouchableOpacity style={styles.boton}  onPress={agregarAlCarrito}><Text style={styles.colorbotoncito}>Agregar al carrito </Text></TouchableOpacity>
      </View>
    );
  }


  


