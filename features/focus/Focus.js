import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import RoundedButton from "../../components/rounded-button/rounded-button-component";
import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.classicCream
    },
    titleConteiner: {
        flex: 0.5,
        padding: spacing.md,
        justifyContent: 'center'
    },
    title:{
        color: colors.orange,
        fontWeight: 'bold',
        fontSize: spacing.lg,
        alignItems: 'center'
    },
    inputConteiner: {
        paddingTop: spacing.lg,
        flexDirection: 'row',
        alignItems: 'center'
    }
});

const Focus = ({ addSubject }) => {

    const [tempItem, setTempItem] = useState(null);
    //const handleOnPress = () => {
    //   addSubject(tempItem);
    //}

    return (
        <View style={styles.container}>
            <View style={styles.titleConteiner}>
                <Text style={styles.title}>Não posso procrastinar em:</Text>
                <View style={styles.inputConteiner}>
                    <TextInput style={{marginRight: spacing.sm, flex: 1}}
                               onSubmitEditing={({nativeEvent}) => {
                                   //setTempItem(nativeEvent.text);
                                    addSubject(nativeEvent.text);
                                }}>
                    </TextInput>
                    <RoundedButton title="+"
                                   size={50}
                                   position="center"
                                   textColor={colors.darkOrange}
                                   style={{backgroundColor: colors.lightOrange}}
                                   textStyle={{color: colors.darkOrange}}
                                   onPress={() =>{}}>
                    </RoundedButton>
                </View>
            </View>
        </View>
    )
}

export default Focus;