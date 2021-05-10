import React from 'react';
import { View, StyleSheet, ColorPropType } from 'react-native';
import RoundedButton from '../../components/rounded-button/rounded-button-component';
import { colors } from '../../utils/colors';
import { spacing, fontSize } from '../../utils/sizes';

const  styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    timingButtom: {
        flex: 1,
        alignItems: 'center',
        padding: spacing.lg
    }
})

const Timing = ({ onChangeTime }) => {

    return (
        <View style={styles.container}>
            <View style={styles.timingButtom}>
            <RoundedButton size={75}
                            title="05"
                            backgroundColor={colors.lightYellow}
                            onPress={() => onChangeTime(5)}>
            </RoundedButton>
            </View>
            <View style={styles.timingButtom}>
                <RoundedButton size={75}
                                title="10"
                                backgroundColor={colors.lightYellow}
                                onPress={() => onChangeTime(10)}>
                </RoundedButton>
            </View>
            <View style={styles.timingButtom}>
            <RoundedButton size={75}
                            title="15"
                            backgroundColor={colors.lightYellow}
                            onPress={() => onChangeTime(15)}>
            </RoundedButton>
            </View>
        </View>
    )
}

export default Timing;