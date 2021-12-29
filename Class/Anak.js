import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Nama extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontWeight: 'bold' }}>
          Hello Ini Props Nama {this.props.name}{' '}
        </Text>
      </View>
    );
  }
}
