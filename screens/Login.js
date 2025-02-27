import { StyleSheet, Text, View, Image, Button,SafeAreaView, ScrollView,TouchableOpacity} from 'react-native';
import { Alert,Platform } from 'react-native';

import { useEffect,useState} from 'react';
import { TextInput } from 'react-native-gesture-handler';
import styles from '../styles/LoginStyles';

//<>

export default function Login( {navigation} ){
        const[email,setEmail]= useState('');
        const[contra,setContra]= useState('');
  
        const MensajeTipo =(mensaje)=>{
            if(Platform.OS=='web'){
                window.alert(mensaje);
            }
            else{
                Alert.alert(mensaje);
            }
            

        }      

        const iniciar = () => {
            console.log("Email:", email);
            if (email== 'gopersonal@gmail.com' && contra== 'gopersonal'){
                MensajeTipo('Acceso Concedido');
                navigation.navigate("Home");


                }
            else{ 
                MensajeTipo('Email o Contrasena incorrecto');
                }
        }
        
        return(
        <View style={styles.claseMain}> 
            <View> 
            < Image source={require("../assets/user.png")} style={styles.perfil}/>
            </View>
            <View style={styles.log} >
                <View style={styles.cajatexto}>
                    <TextInput placeholder='correoElectronico@gmail.com'  style={{paddingHorizontal:15}}
                    onChangeText={(text)=>setEmail(text)}/>
                </View>
                <View style={styles.cajatexto} >
                <TextInput placeholder='Contraseña' style={{paddingHorizontal:15}}secureTextEntry={true}
                    onChangeText={(text)=>setContra(text)}/>
                </View>
                
                <View style={styles.boton}>
                <TouchableOpacity style={styles.cajaDelBoton} onPress={iniciar}>
                <Text style={styles.textitoDelBoton}> Iniciar Sesion</Text>
                </TouchableOpacity> 
                </View>
            </View>

        </View>
            
        );

}

