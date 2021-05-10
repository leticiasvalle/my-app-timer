import React, { useState }  from 'react';
import { View, Text, StyleSheet, Vibration, Platform } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { colors } from '../../utils/colors';
import { spacing, fontSize } from '../../utils/sizes';
import RoundedButton from '../../components/rounded-button/rounded-button-component';
import CountDown from '../../components/countdown/countdown.componet';
import Timing from './Timing';
import { useKeepAwake } from 'expo-keep-awake';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
      color: colors.orange,
      textAlign: 'center',
      fontSize: fontSize.xl
    },
    task: {
        color: colors.darkOrange,
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: fontSize.xl
    },
    countDown: {
        flex: 0.65,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonWrapper: {
        flex: 0.3,
        padding: spacing.lg,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const Timer = ({ focusSubject, onTimerEnd }) => {

    useKeepAwake();

    const [isStarted, setIsStarted] = useState(false);
    const [progress, setProgress] = useState(null);
    const [minutes, setMinutes] = useState(1);

    const onProgress = (progress) => {
        setProgress(progress);
    }

    const onChangeTime = (min) => {
        setMinutes(min);
        setProgress(1);
        setIsStarted(false);
    }

    const vibrate = () => {
        console.log(Platform.OS)
        if(Platform.OS === 'ios'){
            const interval = setInterval(() => Vibration.vibrate(), 1000);
            setTimeout(() => clearInterval(interval), 1000)
        }else{
            Vibration.vibrate(1000);
        }
    }

    const onEnd = () => {
        console.log('FIM')
        vibrate();
        setIsStarted(true);
        onTimerEnd();
    }

    return (
        <View style={styles.container}>
            <View style={styles.countDown}>
                <CountDown isPaused={isStarted}
                           minutes={minutes}
                           onProgress={onProgress}
                           onEnd={onEnd}>
                </CountDown>
            </View>
            <View style={{paddingTop: spacing.xxxl}}>
                <Text style={styles.title}>Meu foco agora é:</Text>
                <Text style={styles.task}> { focusSubject } </Text>
            </View>
            <View style={{padding: spacing.sm}}>
                <ProgressBar
                    progress={progress}
                    color={colors.lightGreen}
                    style={{ height: 20}}
                    borderRadius={50}>
                </ProgressBar>
            </View>
            <View>
                <Timing
                    onChangeTime={onChangeTime}>
                </Timing>
            </View>
            <View style={styles.buttonWrapper}>
            { isStarted ?
                (<RoundedButton title="Start"
                                backgroundColor='#B9E4C9'
                                onPress={() => setIsStarted(false)}>
                 </RoundedButton>)
                :
                (<RoundedButton title="Pause"
                                onPress={() => setIsStarted(true)}>
                 </RoundedButton>)
            }
            </View>
        </View>
    )
}

export default Timer;