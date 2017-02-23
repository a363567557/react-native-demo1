'use strict';
import React from 'react';
import {
  StyleSheet
}from 'react-native';

var WeatherStyle = StyleSheet.create({
  textContainer: {
	 flex: 1,
 },
 container: {
	 marginTop: 10,
 },
 separator: {
 height: 1,
 backgroundColor: "#dddddd",
 },
 id: {
 fontSize: 25,
 fontWeight: 'bold',
 color: '#48BBEC',
 },
 title: {
	 fontSize: 20,
	 color: '#656565',
 },
 rowContainer: {
	 flexDirection: 'row',
	 padding: 10,
 },
 image: {
   width: 300,
   height: 400,
 },
});

module.exports = WeatherStyle;
