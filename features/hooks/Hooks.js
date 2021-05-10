import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../../components/custom-button/custom-button.component';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFBE6',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const Hooks = () => {

    let [contador, setContador] = useState(10);
    let [outroContador, setOutroContador] = useState(20);

    //Executa sempre que houver alteração de estado - qualquer componente
    useEffect(() => {
        console.log('useEffect');
    });

    //Executa uma única vez quando o componente é criado
    useEffect(() => {
        console.log('useEffect');
    }, []);

    //Executa quando o componente é criado e o estado de contador é alterado
    useEffect (() => {
        console.log('useEffect');
    }, [contador]);

    const handleCount = () => {
        setContador(contador ++)
    }

    const handleOutro = () => {
        setOutroContador(outroContador --)
    }

    return (
        <View style={styles.container}>
            <Text>Valor: {contador}</Text>
            <CustomButton title='Contar' onPress={handleCount}></CustomButton>
            <Text>Outro Valor: {outroContador}</Text>
            <CustomButton title='Descontar' onPress={handleOutro}></CustomButton>
        </View>
    )
}

export default Hooks;