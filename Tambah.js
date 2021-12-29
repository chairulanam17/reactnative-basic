import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Tambah(props) {
  return (
    <TouchableOpacity onPress={props.tap}>
      <View>
        <Text style={styles.komteks}>{props.teks}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  komteks: {
    marginBottom: 15,
    fontSize: 20,
    color: 'blue',
  },
});
