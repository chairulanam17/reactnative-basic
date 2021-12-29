import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Induk from './Class/Induk';
import GantiNama from './GantiNama';
import Hasil from './Hasil';
import Kurang from './Kurang';
import Nilai from './Nilai';
import NoMinus from './NoMinus';
import Tambah from './Tambah';

export default function App() {
  // const [berubah, setBerubah] = useState(0);
  // const handlePlus = () => {
  //   berubah < 4 ? setBerubah(berubah + 1) : alert('4 aja cukup');
  //   // setBerubah(berubah + 1);
  // };

  // const handleMimnus = () => {
  //   berubah > 0 ? setBerubah(berubah - 1) : alert('ga bisa minus');
  // };
  return (
    <View style={styles.container}>
      {/* <Tambah teks="Tambah" tap={() => handlePlus()} />

      <Nilai total={berubah} />
      <Kurang teks="Kurang" tap={() => handleMimnus()} /> */}
      {/* <GantiNama /> */}
      {/* <Induk /> */}
      {/* <NoMinus /> */}
      <Hasil />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
