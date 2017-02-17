import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Navigator
} from 'react-native';

import ProvinceList from './province_list';


export default class WeatherIndex extends Component {
	render() {
		let defaultComponent = ProvinceList;
		let defaultName = defaultComponent+'';
		return(
			<Navigator
				initialRoute={{name:defaultName,component:defaultComponent}}
				
				configureScene={(route)=>{
					return Navigator.SceneConfigs.VerticalDownSwipeJump;
				}}
				
				renderScene={(route,navigator)=>{
						let Component = route.component;
						return <Component {...route.params} navigator={navigator} />
				}}
			/>
		);
}
}
