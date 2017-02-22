import React from 'react';
import {
  StyleSheet
}from 'react-native';

var Dimensions = require("Dimensions");

var DailyForecastStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 150,
    // width: Dimensions.get('window').width,
    backgroundColor: '#aaaabbcc',
  },
  title: {
    fontSize: 20,
    color: '#fff',
  },
  rowContainer: {
    flexDirection: 'row',
    flex: 1,
    // width: Dimensions.get('window').width,
    paddingTop: 4,
    paddingBottom: 4,
  },
  date: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    marginLeft: 100,
    // backgroundColor: '#48BBEC',
    fontWeight: 'bold',
    color: '#fff',
  },
  weather: {
    flex: 1,
    textAlign: 'center',
    width: 100,
    fontSize: 16,
    alignItems:'center',
    color: '#fff',
  },
  maxTemp: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  minTemp: {
    textAlign: 'center',
    fontSize: 35,
    paddingRight: 20,
    color: '#fff',
  },
});

module.exports = DailyForecastStyle;
