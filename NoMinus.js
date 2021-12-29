import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Kurang from './Kurang';
import Nilai from './Nilai';
import Tambah from './Tambah';

export default function NoMinus(props) {
  let [nilai, setNilai] = useState(0);
  const ubahNilaiBaru = (newValue) => {
    props.hasilBaru(newValue);
  };
  const handlePlus = () => {
    setNilai(nilai + 1), ubahNilaiBaru(nilai);

    // console.log(nilai);
    // setBerubah(berubah + 1);
  };

  const handleMinus = () => {
    // console.log(nilai);
    nilai > 0 ? setNilai(nilai - 1) : alert('ga bisa minus'),
      ubahNilaiBaru(nilai);
  };

  return (
    <View style={styles.container}>
      <Tambah teks={'Tambah'} tap={() => handlePlus()} />
      <Nilai total={nilai} />
      <Kurang teks={'Kurang'} tap={() => handleMinus()} />
      <TouchableOpacity
        onPress={() => {
          setNilai((nilai = 0), ubahNilaiBaru(0));
        }}
      >
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
