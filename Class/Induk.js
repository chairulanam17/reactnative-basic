import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';
import Nama from './Anak';
import Kelas from './Kelas';

export default class Induk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      kelas: '',
    };
  }

  render() {
    return (
      <View>
        <Text> Siapa Nama Kamu </Text>
        <TextInput
          placeHolde="Ketikan Nama"
          style={{ width: 200, borderWidth: 1 }}
          onChangeText={(text) => this.setState({ name: text })}
        />
        <Nama name={this.state.name} />
        <Text> Kamu Kelas Berapa </Text>
        <TextInput
          placeHolde="Ketikan Kelas"
          style={{ width: 200, borderWidth: 1 }}
          onChangeText={(text) => this.setState({ kelas: text })}
        />
        <Kelas kelas={this.state.kelas} />
      </View>
    );
  }
}
