import React from 'react';
import { View, Text, Button, FlatList, ActivityIndicator } from 'react-native';
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
      <View style={{ margin: 18 }}>
        <Button title={'Api Fetch'} onPress={goForFetch} color="green" />
      </View>
      <View style={{ margin: 18 }}>
        <Button title={'Api Axios'} onPress={goForAxios} color="green" />
      </View>
      {fromFetch ? (
        <FlatList
          data={dataSource}
          ItemSeparatorComponent={FlatListItemSeparator}
          renderItem={(item) => renderItem(item)}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <FlatList
          data={axiosData}
          ItemSeparatorComponent={FlatListItemSeparator}
          renderItem={(item) => renderItem(item)}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      {loading && (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
          <Text style={{ fontSize: 16, color: 'red' }}>Loading Data...</Text>
        </View>
      )}
    </View>
  );
}
