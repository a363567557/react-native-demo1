'use strict';
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
      paddingLeft: 10,
      paddingTop: 10,
      fontSize: 20,
      color: '#fff',
  },

});

module.exports = DailyForecastStyle;
