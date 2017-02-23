'use strict';
import React from 'react';
import {
  StyleSheet
}from 'react-native';

var Dimensions = require("Dimensions");

var paddingRight = 12;

var WeatherTopStyle = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 150,
    // width: Dimensions.get('window').width,
    // backgroundColor: '#aaaabbcc',
  },
  cityAndTimeContainer: {
    flexDirection: 'row',
    flex: 1,
    // width: Dimensions.get('window').width,
    paddingTop: 12,
    paddingBottom: 12,
  },
  city: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
    marginLeft: 100,
    // backgroundColor: '#48BBEC',
    fontWeight: 'bold',
    color: '#fff',
  },
  updateTime: {
    textAlign: 'right',
    paddingRight: paddingRight,
    width: 100,
    fontSize: 16,
    // alignItems:'center',
    color: '#fff',
  },
  temperatureContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  temperature: {
    textAlign: 'right',
    paddingRight: paddingRight,
    fontSize: 35,
    color: '#fff',
  },
  weatherInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  weatherInfoStyle: {
    paddingRight: paddingRight,
    textAlign: 'right',
    fontSize: 20,
    color: '#fff',
  },
});

module.exports = WeatherTopStyle;
