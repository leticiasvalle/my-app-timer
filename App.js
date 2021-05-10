import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Focus from "./features/focus/Focus";
import Timer from "./features/timer/Timer";
import { colors } from './utils/colors';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.classicCream
  }
});

export default function App() {

  const [focusSubject, setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      {
        focusSubject ? (
          <Timer focusSubject={focusSubject}
                 onTimerEnd={() => setFocusSubject(null)}>
          </Timer>
        )
        : (
          <Focus addSubject={setFocusSubject}></Focus>
        )
      }
    </View>
  );
}