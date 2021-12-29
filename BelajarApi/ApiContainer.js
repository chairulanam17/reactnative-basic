import axios from 'axios';
import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './ApiStyles';
import ApiView from './ApiView';

export default class ApiContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      fromFetch: false,
      fromAxios: false,
      dataSource: [],
      axiosData: null,
    };
  }
  goForFetch = () => {
    this.setState({
      fromFetch: true,
      loading: true,
    });
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('data dari fetch', responseJson);
        setTimeout(() => {
          this.setState({
            loading: false,
            dataSource: responseJson,
          });
        }, 2000);
      })
      .catch((error) => console.log(error));
  };

  goForAxios = () => {
    this.setState({
      fromFetch: false,
      loading: true,
    });
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log('data dari axios', response.data);
        setTimeout(() => {
          this.setState({
            loading: false,
            axiosData: response.data,
          });
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  FlatListSeparator = () => {
    return (
      <View
        style={{ height: 0.5, width: '100%', backgroundColor: '#000000' }}
      />
    );
  };
  renderItem = (data) => {
    return (
      <TouchableOpacity style={styles.list}>
        <Text style={styles.lightText}>{data.item.name}</Text>
        <Text style={styles.lightText}>{data.item.email}</Text>
        <Text style={styles.lightText}>{data.item.company.name}</Text>
      </TouchableOpacity>
    );
  };
  render() {
    const { dataSource, fromFetch, fromAxios, loading, axiosData } = this.state;
    return (
      <ApiView
        goForFetch={this.goForFetch}
        goForAxios={this.goForAxios}
        dataSource={dataSource}
        loading={loading}
        fromFetch={fromFetch}
        fromAxios={fromAxios}
        axiosData={axiosData}
        FlatListSeparator={this.FlatListSeparator}
        renderItem={this.renderItem}
      />
    );
  }
}
