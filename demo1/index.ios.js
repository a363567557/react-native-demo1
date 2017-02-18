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
  NavigatorIOS,
  Navigator,
} from 'react-native';

import ProvinceList from './js/weather/province_list';

export default class demo1 extends Component {
  render() {
  	let defaultComponent = ProvinceList;
	let defaultName = defaultComponent+'';
    return (
      // 	<Navigator
			// 	initialRoute={{name:defaultName,component:defaultComponent}}
      //
			// 	configureScene={(route)=>{
			// 		return Navigator.SceneConfigs.VerticalDownSwipeJump;
			// 	}}
      //
			// 	renderScene={(route,navigator)=>{
			// 			let Component = route.component;
			// 			return <Component {...route.params} navigator={navigator} />
			// 	}}
			// />
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'China',
          component: ProvinceList,
        }}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  }
});

AppRegistry.registerComponent('demo1', () => demo1);
