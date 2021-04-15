import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { styles } from '../theme/appTheme';

interface Prop{
    texto:string,
    color?:string,
    textcolor:string,
    ancho?:boolean;
    accion: (numeroTexto :string) => void
}

export const BotonCalc = ({texto,color="#303030",textcolor="#fff",ancho=false,accion}:Prop) => {
    return (
        <TouchableOpacity 
            onPress={()=>accion(texto)}
        >
        <View style={{
            ...styles.boton,
            backgroundColor:color,
            width:(ancho)?180:80}}
            >
            <Text style={{
                ...styles.botonTexto,
                color:textcolor}}
                >
                {texto}
                </Text>
        </View>
        </TouchableOpacity> 
    );
}
