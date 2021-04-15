import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    fondo:{
        backgroundColor:'skyblue',
        flex:1,
    },
    resultado:{
        fontSize:60,
        color:'white',
        textAlign:'right'
    },
    calculadoracontainer:{
        flex:1,
        paddingHorizontal:10,
        backgroundColor:'rgb(58, 137, 190)',
        justifyContent:'flex-end'
    },
    resultadoPequeño:{
        fontSize:30,
        color:'rgba(255,255,255,0.7)',
        textAlign:'right',
    },
    fila:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        flexWrap:'wrap',
        marginBottom:12,
        paddingHorizontal:10,
    },
    boton:{
        width:70,
        height:70,
        backgroundColor:'#333333',
        borderRadius:100,
        justifyContent:'center'
    },
    botonTexto:{
        textAlign:'center',
        padding:10,
        fontSize:30,
        color:'white',
        fontWeight:'300'
    }
});