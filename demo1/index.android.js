/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import ProvinceList from './js/weather/view/province_list';

export default class demo1 extends Component {
  render() {
  	let defaultComponent = ProvinceList;
	let defaultName = defaultComponent+'';
    return (
      	<Navigator
				initialRoute={{name:defaultName,component:defaultComponent}}
				
				configureScene={(route)=>{
					return Navigator.SceneConfigs.HorizontalSwipeJump;
				}}
				
				renderScene={(route,navigator)=>{
						let Component = route.component;
						return <Component {...route.params} navigator={navigator} />
				}}
			/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('demo1', () => demo1);
