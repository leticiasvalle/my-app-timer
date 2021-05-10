import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FD5523',
        padding: 10,
        borderRadius: 50
    }
})

const CustomButton = ({title, ...otherProps}) => {

    return (
        <TouchableOpacity
            style={styles.button}
            {...otherProps}>
            <Text style={{ color: '#FFFFFF', fontWeight: 'bold' }}> {title} </Text>
        </TouchableOpacity>
    )
}

export default CustomButton;