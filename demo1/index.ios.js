
import React from 'react';
import {
  AppRegistry,
} from 'react-native';

import WeatherComponent from './js/weather/index.weather';

export default class demo1 extends React.Component {
  render() {
    return (
      	<WeatherComponent />
    );
  }
}

AppRegistry.registerComponent('demo1', () => demo1);
