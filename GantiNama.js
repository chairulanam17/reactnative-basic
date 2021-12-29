import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Nama from './Nama';

export default class GantiNama extends Component {
  state = {
    namaState: 'Seto Kaiba',
  };
  updateState = () => {
    this.setState({ namaState: 'Seto Mulyadi then state updated' });
  };
  render() {
    return (
      <View>
        <Nama nama={this.state.namaState} apdetNama={this.updateState} />
      </View>
    );
  }
}

//state tanpa props
