import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { spacing, fontSize } from '../../utils/sizes';

const styles = (size, position, textColor, backgroundColor) => StyleSheet.create({
    radius: {
        borderRadius: size/2,
        width: size,
        height: size,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: colors.orange,
        backgroundColor: backgroundColor,
        borderWidth: 2
    },
    textStyle: {
        color: colors.darkOrange,
        fontSize: fontSize.lg,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold'
    }
})

const RoundedButton = ({
    title,
    size = 100,
    position = 'center',
    textColor = colors.darkOrange,
    backgroundColor = colors.lightOrange,
    style = {},
    textStyle = {},
    ...otherProps
}) => {

    return (
        <TouchableOpacity style={[styles(size, position, textColor, backgroundColor).radius, style]} {...otherProps}>
            <Text style={[styles(size).textStyle, textStyle]}>{ title }</Text>
        </TouchableOpacity>
    )
}

export default RoundedButton;