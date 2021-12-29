import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Nilai(props) {
  return (
    <View>
      <Text style={styles.hasil}>{props.total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hasil: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
  },
});
