import React from 'react';
import {
	Navigator,
	Text,
	View,
	TouchableOpacity,
	TouchableHighlight,
	ActivityIndicator,
	ListView
} from 'react-native';
import ProvinceList from './view/province_list'

export default class WeatherComponent extends React.Component {
	render(){
		let defaultComponent = ProvinceList;
		let defaultName = defaultComponent+'';
		return(<Navigator
				initialRoute={{name:defaultName,component:defaultComponent}}

				configureScene={(route)=>{
					return Navigator.SceneConfigs.HorizontalSwipeJump;
				}}

				renderScene={(route,navigator)=>{
						let Component = route.component;
						return <Component {...route.params} navigator={navigator} />
				}}
			/>);
	}
}
