import { StyleSheet } from 'react-native';

const styles= StyleSheet.create({
    claseMain:{
        flex:1,
        justifyContent: "center",
        alignItems:"center",
        backgroundColor:'#F5F5F5'

    },
    
    perfil:{
    width:100,
    height:100,
    borderRadius:55,
    borderColor: "black",
    borderBlockEndColor:'black',
        
    },
    log:{
        margin:20,
        backgroundColor: "white",
        borderRadius: 25,
        width:'auto',
        padding:20,
        shadowColor: "#000",
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.40,
        shadowRadius:4,


    },
    cajatexto:{
        paddingVertical:20,
        backgroundColor:"#cccccc40",
        borderRadius:30,
        margin:20
    
    },
    boton:{
        alignItems:"center"
    },
    cajaDelBoton:{
        backgroundColor:"red",
        borderRadius:33,
        paddingVertical:20,
        width:150,
        marginTop:25


    },
    textitoDelBoton:{
        textAlign:"center",
        color:"white"
    }
});
export default styles;
