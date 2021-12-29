import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Kurang(props) {
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
    marginTop: 15,
    fontSize: 20,
    color: 'blue',
  },
});
