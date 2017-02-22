//天气demo控件入口

import React from 'react';
import {
	Navigator,
	Text,
	Image,
	ScrollView,
	View,
	TouchableOpacity,
	TouchableHighlight,
	ActivityIndicator,
	ListView
} from 'react-native';

import {NavigatormaperStyle} from '../style/NavigatormaperStyle';
import WeatherAPI from '../api/WeatherAPI';
import WeatherBaseComponent from '../base/WeatherBaseComponent';
import CommonStyle from '../style/CommonStyle';
import WeatherTop from '../view/weatherTop';
let weatherData = require('../base/BaseWeatherData.json');

export default class Weather extends WeatherBaseComponent {

	constructor(props) {

		super(props);
		this.weatherAPI = new WeatherAPI();
		this.state = {
			isLoading: true,
			back_image: '',
			weather: null,
			basic: null,
			nowWeather: null,
			suggestion: null,
			aqi: null,
			daily_forecast: null,
		}
	}

	render() {
		const spinner = this.state.isLoading ? (
					<ActivityIndicator
						hidden = 'true'
						size = 'large'/>) : (<View/>);
		return(
			<Image style={CommonStyle.back_image} source={{uri: 'http://cn.bing.com/az/hprichbg/rb/YorkshireWinter_ZH-CN9258658675_1920x1080.jpg'}}>
				<View style={NavigatormaperStyle.container}>
		    			<TouchableHighlight style={NavigatormaperStyle.left} onPress={this.onLeftOnClick.bind(this)}>
		    				<Text style={NavigatormaperStyle.leftButton}>left</Text>
		    			</TouchableHighlight>
					    <TouchableHighlight style={NavigatormaperStyle.center}>
					    	<Text style={NavigatormaperStyle.title}>{this.props.cityName}</Text>
					    </TouchableHighlight>
					    <TouchableHighlight style={NavigatormaperStyle.right}>
						    <Text style={NavigatormaperStyle.rightButton}>right</Text>
						</TouchableHighlight>
		    	</View>
		    	<ScrollView>
						<WeatherTop basic={this.state.basic} nowWeather={this.state.nowWeather}/>
						<WeatherTop basic={this.state.basic} nowWeather={this.state.nowWeather}/>
						<WeatherTop basic={this.state.basic} nowWeather={this.state.nowWeather}/>
						<WeatherTop basic={this.state.basic} nowWeather={this.state.nowWeather}/>
						<WeatherTop basic={this.state.basic} nowWeather={this.state.nowWeather}/>
		    	</ScrollView>
		    	{spinner}
				</Image>

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
			let weatherInfo = json.HeWeather[0];
				if(weatherInfo.status == 'ok'){//请求到天气数据
					this.setState({
						isLoading: false,
						weather: weatherInfo,
						basic: weatherInfo.basic,
						nowWeather: weatherInfo.now,
						suggestion: weatherInfo.suggestion,
						aqi: weatherInfo.aqi,
						daily_forecast: weatherInfo.daily_forecast,
					})
				}else{
					alert("error");
				}
		});
	}

	componentWillMount() {
		this.getWeather.bind(this)();
	}
}
