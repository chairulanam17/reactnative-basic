import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Nama(props) {
  return (
    <TouchableOpacity onPress={props.apdetNama}>
      <View>
        <Text>{props.nama}</Text>
      </View>
    </TouchableOpacity>
  );
}
