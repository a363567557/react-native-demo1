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

import {NavigatormaperStyle} from './style/NavigatormaperStyle';
import WeatherAPI from './api/WeatherAPI';
import WeatherBaseComponent from './base/WeatherBaseComponent';


export default class Weather extends WeatherBaseComponent {

	constructor(props) {
		super(props);
		this.weatherAPI = new WeatherAPI();
		this.state = {
			isLoading:true,
			weather: '',
		}
	}

	render() {
		const spinner = this.state.isLoading ? (
					<ActivityIndicator
						hidden = 'true'
						size = 'large'/>) : (<View/>);	
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
		    	{spinner}
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
						isLoading:false,
						weather: weatherInfo,
						//daily_forecast
					})
				}
		});
	}

	componentDidMount() {
		this.getWeather.bind(this)();
	}
}