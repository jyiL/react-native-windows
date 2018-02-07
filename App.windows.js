/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  WebView
} from 'react-native';
import Echarts from 'react-native-web-echarts'

const instructions =
  'Press Ctrl+R to reload,\n' +
  'Shift+F10 or shake for dev menu';

export default class App extends Component<{}> {
  state = {
    data: [820, 932, 901, 934, 1290, 1330, 1320]
  }
  render() {
    console.log('=sdadasdsadsa===== ' + Platform.OS);
    const option = {
      xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: this.state.data,
          type: 'line',
          areaStyle: {}
      }]
    };  
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native123123123!12312312
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.windows.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text>{'echarts demo'}</Text>
          <Echarts
            option={option}
            height={300}
            style={{backgroundColor: '#f40'}}
            onLoadStart={() => { console.log('onLoadStart') }}
            onLoad={() => { console.log('onLoad') }}
            onError={() => { console.log('onError') }}
            onLoadEnd={() => { console.log('onLoadEnd') }}
            onMessage={() => { console.log('onMessage') }}
            renderLoading={() => { console.log('renderLoading') }}
            renderError={() => { console.log('renderError') }}
          />
          <Button
            title="reload"
            onPress={() => { this.setState({ data: [...Array(7)].map(_ => Math.ceil(Math.random() * (30))) })} }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
