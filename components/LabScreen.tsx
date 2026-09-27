import { useState } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import useStopwatch from '../hooks/useStopwatch';
import PracticeTracker from './PracticeTracker';
import Stopwatch from './Stopwatch';

export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const seconds = useStopwatch(isRunning);

  const handleSolve = () => {
    setSolved((s) => s + 1);
  };

  const handleReset = () => {
    setSolved(0);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Lab Timer & Practice Tracker
      </Text>

      <PracticeTracker
        solved={solved}
        onSolve={handleSolve}
        onReset={handleReset}
      />

      <Stopwatch
        seconds={seconds}
        isRunning={isRunning}
      />

      <View style={styles.button}>
        <Button
          title="Start"
          onPress={handleStart}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Stop"
          onPress={handleStop}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  button: {
    width: '80%',
    marginVertical: 5,
  },
});