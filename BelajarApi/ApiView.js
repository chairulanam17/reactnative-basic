import React from 'react';
import { View, Text } from 'react-native';
import styles from './ApiStyles';

export default function ApiView(props) {
  const {
    goForFetch,
    goForAxios,
    fromFetch,
    fromAxios,
    axiosData,
    renderItem,
    FlatListItemSeparator,
    dataSource,
    loading,
  } = props;
  return (
    <View style={styles.parentContainer}>
      <View>
        <Text style={styles.textStyle}>Belajar API</Text>
      </View>
    </View>
  );
}
