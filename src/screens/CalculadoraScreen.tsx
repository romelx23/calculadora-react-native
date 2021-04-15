import React, { useRef, useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { useCalcudora } from '../../hooks/useCalcudora';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';  

export const CalculadoraScreen = () => {

    const {
        numeroAnterior,
        numero,
        limpiar,
        positioNegativo,
        delet,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        armarNumero,
        calcular
        }=useCalcudora();

    return (
        <View
        style={styles.calculadoracontainer}
        >
            {
                (numeroAnterior!=='0')&&(<Text 
                    style={styles.resultadoPequeño}>
                    {numeroAnterior}
                    </Text>)
            }
            <Text 
            style={styles.resultado
            }
            numberOfLines={3}
            adjustsFontSizeToFit
            >
            {numero}
            </Text>

            <View style={styles.fila}>
                <BotonCalc texto="C" color="#FF9A4D" textcolor="" accion={limpiar}/>
                <BotonCalc texto="+/-" color="#FF584D" textcolor=""  accion={positioNegativo}/>
                <BotonCalc texto="del" color="#65A4FF" textcolor=""  accion={delet}/>
                <BotonCalc texto="/" color="#F1A43C" textcolor="#fff"  accion={btnDividir}/>
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="7" textcolor="#fff" color="#4DB7FF" accion={armarNumero}/>
                <BotonCalc texto="8" textcolor="#fff" color="#7078FF" accion={armarNumero}/>
                <BotonCalc texto="9" textcolor="#fff" color="#BE70FF" accion={armarNumero}/>
                <BotonCalc texto="x" color="#F1A43C" textcolor="#fff"  accion={btnMultiplicar}/>
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="4" textcolor="#fff" color="#FF70C6" accion={armarNumero}/>
                <BotonCalc texto="5" textcolor="#fff" color="#BE70FF" accion={armarNumero}/>
                <BotonCalc texto="6" textcolor="#fff" color="#FF7099" accion={armarNumero}/>
                <BotonCalc texto="-" color="#F1A43C" textcolor="#fff" accion={btnRestar}/>
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="1" textcolor="#fff" color="#708FFF" accion={armarNumero}/>
                <BotonCalc texto="2" textcolor="#fff" color="#70FF9B" accion={armarNumero}/>
                <BotonCalc texto="3" textcolor="#fff" color="#FFC070" accion={armarNumero}/>
                <BotonCalc texto="+" color="#F1A43C" textcolor="#fff"  accion={btnSumar}/>
            </View>
            <View style={styles.fila}>
                <BotonCalc texto="0"  textcolor="#fff" ancho accion={armarNumero}/>
                <BotonCalc texto="."  textcolor="#fff"  accion={armarNumero}/>
                <BotonCalc texto="=" color="#F1A43C" textcolor="#fff"  accion={calcular}/>
            </View>
        </View>
    );
}
