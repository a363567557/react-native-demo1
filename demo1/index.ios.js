
import React from 'react';
import {
  AppRegistry,
} from 'react-native';

import WeatherComponent from './js/weather/index.weather';
import ButtonTest from './js/widget/ButtonTest';

export default class demo1 extends React.Component {
  render() {
    return (
      	<ButtonTest />
    );
  }
}

AppRegistry.registerComponent('demo1', () => demo1);
