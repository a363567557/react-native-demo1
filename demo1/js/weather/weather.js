import React , {Component} from 'react';
import {
	Text,
	View,
	TouchableHighlight
} from 'react-native';

import {NavigatormaperStyle} from './style/NavigatormaperStyle';

export default class Weather extends Component{
	
	render(){
		return(
			<View>
				<View style={NavigatormaperStyle.container}>
		    			<TouchableHighlight style={NavigatormaperStyle.leftButton} onPress={this.onLeftOnClick.bind(this)}>
		    				<Text>left</Text>
		    			</TouchableHighlight>
					    <TouchableHighlight style={NavigatormaperStyle.title}>
					    	<Text>{this.props.cityName}</Text>
					    </TouchableHighlight>
					    <TouchableHighlight style={NavigatormaperStyle.rightButton}>
						    <Text>right</Text>
						</TouchableHighlight>
		    	</View>
		    	<Text>{this.props.cityName}今天天气不错!!!!</Text>
		    </View>
		);
	}
	
	onLeftOnClick(){
		this.onBack();
	}
	
	onBack(){
		let navigator = this.props.navigator;
		if(navigator){
			navigator.pop();
		}
	}
}
