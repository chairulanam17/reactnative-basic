import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NoMinus from './NoMinus';

export default function Hasil() {
  let [hasilBaru, setHasilBaru] = useState(0);
  let handleChange = (newValue) => {
    setHasilBaru((hasilBaru = newValue));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.jarak}>berubah nih {hasilBaru}</Text>
      <NoMinus hasilBaru={(newValue) => handleChange(newValue)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  jarak: { marginBottom: 100, fontSize: 40 },
});
