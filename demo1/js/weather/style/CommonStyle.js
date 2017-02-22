import React from 'react';
import {
  StyleSheet
}from 'react-native';

var Dimensions = require("Dimensions");

var CommonStyle =  StyleSheet.create({
  textContainer: {
	 flex: 1,
 },
 container: {
   flex: 1,
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
 back_image: {
   width: Dimensions.get('window').width,
   height: Dimensions.get('window').height,
 },
});

module.exports = CommonStyle;
