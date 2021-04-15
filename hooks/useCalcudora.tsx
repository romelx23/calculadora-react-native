import React, { useRef, useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';


enum Operador{
    suma,resta,multiplicar,dividir
}

export const useCalcudora = () => {

    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');

    const ultimaOperacion=useRef<Operador>();
    
    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    const armarNumero = (numeroTexto:string) => {

        // si existe un punto decimal 
        // no aceptar doble punto
        if(numero.includes('.')&&numeroTexto==='.') return;
        
        if(numero.startsWith('0') || numero.startsWith('-0')){
            //punto decimal
            if(numeroTexto==='.'){
                setNumero(numero +numeroTexto);
                //evlauar si es otro cero o un punto
            }else if(numeroTexto==='0'&&numero.includes('.')){
                setNumero(numero+numeroTexto);

                //evaluar si es diferente de cero y no tiene un punto
            }else if(numeroTexto!=='0'&& !numero.includes('.')){
                if(numero.startsWith('-0')){
                    setNumero('-'+numeroTexto);
                }else{
                    setNumero(numeroTexto);
                }

            }else if(numeroTexto==='0'&& !numero.includes('.')){
                setNumero(numero);
            }else{
                setNumero(numero+numeroTexto);
            }

        }else{
            setNumero(numero+numeroTexto);
            console.log(numero);
        }
    }

    const positioNegativo=()=>{
        if(numero.includes('-')){
            setNumero(numero.replace('-',''));
        }else{
            setNumero('-' + numero);
        }
    }

    const delet=()=>{
        //ELMINA EL ULTIMO NUMERO INGRESADO
        let numeroalmacenado=numero.slice(0,-1);
        if(numero.length===1 || (numero.length===2 && numero.startsWith('-'))){
            setNumero('0');
        }
        else{
            setNumero(numeroalmacenado);
        }
    }

    const cambiarNumeroPorAnterior=()=>{
        if(numero.endsWith('.')){
            setNumeroAnterior(numero.slice(0,-1));
        }else{
            setNumeroAnterior(numero);
        }
        setNumero('0');
    }
    const btnDividir=()=>{
        cambiarNumeroPorAnterior();
        ultimaOperacion.current=Operador.dividir;
    }
    const btnMultiplicar=()=>{
        cambiarNumeroPorAnterior();
        ultimaOperacion.current=Operador.multiplicar;
    }
    const btnRestar=()=>{
        cambiarNumeroPorAnterior();
        ultimaOperacion.current=Operador.resta;
    }
    const btnSumar=()=>{
        cambiarNumeroPorAnterior();
        ultimaOperacion.current=Operador.suma;
    }
    const calcular=()=>{

        const num1=Number(numero);
        const num2=Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operador.suma:
                setNumero(`${num1+num2}`);
                break;
            case Operador.resta:
                setNumero(`${num2-num1}`);
                break;
            case Operador.multiplicar:
                setNumero(`${(num1*num2).toFixed(2)}`);
                break;
            case Operador.dividir:
                setNumero(`${(num2/num1)}`);
                break;
        }
        setNumeroAnterior(`0`);
    }
    return{
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
        calcular,
    };
}
