'use strict';
import React from 'react';
import {
  StyleSheet
}from 'react-native';

var Dimensions = require("Dimensions");

var WeatherTopStyle = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#aa78d1dd',
        marginBottom: 20,
    },
    suggestionContainer: {
        flexDirection: 'column',

    },
    suggestionTitle: {
        marginTop: 10,
        textAlign: 'left',
        paddingLeft: 16,
        fontSize: 20,
        color: '#fff',
    },
    content: {
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'left',
        paddingLeft: 16,
        paddingRight: 16,
        fontSize: 16,
        color: '#fff',
    },

});

module.exports = WeatherTopStyle;
