import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button,SafeAreaView, ScrollView,Alert} from 'react-native';
import { useEffect,useState} from 'react';
import Login from './screens/Login';
import Home from './screens/Home'; 
import Productos from "./screens/Productos";

// Only import react-native-gesture-handler on native platforms
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';




export default function App() {
  const Stack = createStackNavigator();

    function MyStack() {
      return (
        
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} 
           options={{ 
            title: "GoPersonal Login",
            headerTintColor: 'white',
            headerStyle:{backgroundColor: 'red'},
            headerTitleAlign:'center',
            headerShadowVisible:{
              shadowColor: "#000",
              shadowOpacity:0.40,
              shadowRadius:4,
            }
        }}
         />
          <Stack.Screen name="Home" component={Home} 
            options={{ 
            title: "GoPersonal Home",
            headerTintColor: 'white',
            headerStyle:{backgroundColor: 'red'},
            headerTitleAlign:'center',
         }}/>
         <Stack.Screen name = "Productos" component={Productos}
          options={{ 
             title: "GoPersonal Productos",
             headerTintColor: 'white',
             headerStyle:{backgroundColor: 'red'},
             headerTitleAlign:'center',
             headerShadowVisible:{
             shadowColor: "#000",
             shadowOpacity:0.40,
             shadowRadius:4,
                      }
                  }}
         
         />
        </Stack.Navigator>
      );
    }

//<>
console.log("Login.js se está renderizando"); //En un momento de la ejecucion algo no me funcionaba y queria ver en la terminal si se estaba ejecutando o no

  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>

    /*Recordar: el view, text por ejemplo, son propios de react native*/

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    marginTop:10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  }

});

/* view es flex por defecto,a diferencia del div que no es.*/
