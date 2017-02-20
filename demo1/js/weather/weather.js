import React, { Component } from 'react';
import {
	Text,
	View,
	TouchableHighlight
} from 'react-native';

import {NavigatormaperStyle} from './style/NavigatormaperStyle';
import WeatherAPI from './api/WeatherAPI';

export default class Weather extends Component {

	constructor(props) {
		super(props);
		this.weatherAPI = new WeatherAPI();
		this.state = {
			weather: '',
		}
	}

	render() {
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
		    	<Text>{this.state.weather}</Text>
		    </View>
		);
	}

	onLeftOnClick() {
		this.onBack();
	}

	onBack() {
		let navigator = this.props.navigator;
		if(navigator) {
			navigator.pop();
		}
	}

	getWeather() {
		
		this.weatherAPI.getWeather(this.props.weatherId,(json)=>{
			let weather = json.HeWeather[0];
				if(weather.status == 'ok'){//请求到天气数据
					let weatherInfo = weather.basic.city + '--' + weather.daily_forecast[0].cond.txt_d + '---' + weather.daily_forecast[0].cond.txt_n;
					this.setState({
						weather: weatherInfo,
						//daily_forecast
					})
				}
		});
//		fetch(this.URL)
//			.then(response => response.json())
//			.then((json) => {
//				let weather = json.HeWeather[0];
//				if(weather.status == 'ok'){//请求到天气数据
//					let weatherInfo = weather.basic.city + '--' + weather.daily_forecast[0].cond.txt_d + '---' + weather.daily_forecast[0].cond.txt_n;
//					this.setState({
//						weather: weatherInfo,
//						//daily_forecast
//					})
//				}
//			})
//			.catch((error) => {
//				alert(error);
//			})
	}

	componentDidMount() {
		this.getWeather.bind(this)();
	}
}