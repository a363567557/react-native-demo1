import React , {Component} from 'react';
import {
	Text,
} from 'react-native';

export default class Weather extends Component{
	
	render(){
		return(
			<Text>{this.props.rowData}今天的天气不错!!!!!</Text>
		);
	}
}
