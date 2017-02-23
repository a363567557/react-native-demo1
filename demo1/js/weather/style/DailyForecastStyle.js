import React from 'react';
import {
  StyleSheet
}from 'react-native';

var Dimensions = require("Dimensions");

var DailyForecastStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',

    // width: Dimensions.get('window').width,
    backgroundColor: '#aa78d1dd',
  },
  title: {
    padding: 10,
    fontSize: 20,
    color: '#fff',
  },
  rowContainer: {
    flexDirection: 'row',

    // width: Dimensions.get('window').width,
    height: 60,
  },
  date: {
    flex: 2,
    flexDirection: 'row',
    paddingTop: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    textAlign: 'left',
    fontSize: 18,
    // backgroundColor: '#48BBEC',
    fontWeight: 'bold',
    color: '#fff',
  },
  weather: {
    flex: 1,
    paddingTop: 20,
    textAlign: 'center',
    fontSize: 18,
    alignItems:'center',
    color: '#fff',
  },
  maxTemp: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    fontSize: 18,
    color: '#fff',
  },
  minTemp: {
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 18,
    paddingRight: 20,
    color: '#fff',
  },
});

module.exports = DailyForecastStyle;
