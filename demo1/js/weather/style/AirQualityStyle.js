import React from 'react';
import {
  StyleSheet
}from 'react-native';

var Dimensions = require("Dimensions");

var paddingRight = 12;

var WeatherTopStyle = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: '#bbaabbbb',

  },
  aqiTitle: {
    marginTop: 10,
    textAlign: 'left',
    paddingLeft: 16,
    fontSize: 20,
    color: '#fff',
  },
  aqiContainer: {
    flexDirection: 'row',
    height: 120,
  },
  subContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  pointContainer:{
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  point: {
    textAlign: 'center',
    fontSize: 30,
    color: '#fff',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
  },
});

module.exports = WeatherTopStyle;
