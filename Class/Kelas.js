import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Kelas extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontWeight: 'bold' }}>
          Hello Ini Props Kelas {this.props.kelas}{' '}
        </Text>
      </View>
    );
  }
}
