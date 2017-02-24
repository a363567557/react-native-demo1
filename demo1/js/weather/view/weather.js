//天气demo控件入口
'use strict';
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
import WeatherTopComponent from '../view/weather_top';
import DailyForeCastComponent from '../view/daily_forecast';
import AirQualityComponent from '../view/air_quality';
import SuggestionComponent from '../view/suggestion';

export default class Weather extends WeatherBaseComponent {

	constructor(props) {

		super(props);
		this.weatherAPI = new WeatherAPI();
		this.state = {
			isLoading: true,
			back_image: 'http://www.baidu.com',
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

		//搞个延时加载，有数据的时候，才去渲染界面好了
		const content = (this.state.weather !== null) ? (
			<ScrollView>
				<WeatherTopComponent basic = {this.state.basic} nowWeather={this.state.nowWeather}/>
				<DailyForeCastComponent daily_forecast = {this.state.daily_forecast}/>
				<AirQualityComponent aqi = {this.state.aqi} />
				<SuggestionComponent suggestion = {this.state.suggestion}/>
			</ScrollView>
		) : (<View/>)

		return(
			<Image style={CommonStyle.back_image} source={{uri : this.state.back_image}}>
				<View style={NavigatormaperStyle.container}>
		    			<TouchableHighlight style={NavigatormaperStyle.left} onPress={this.onLeftOnClick.bind(this)}>
		    				<Text style={NavigatormaperStyle.leftButton}>BACK</Text>
		    			</TouchableHighlight>
					    <TouchableHighlight style={NavigatormaperStyle.center}>
					    	<Text style={NavigatormaperStyle.title}>{this.props.cityName}</Text>
					    </TouchableHighlight>
					    <TouchableHighlight style={NavigatormaperStyle.right}>
						    <Text style={NavigatormaperStyle.rightButton}>RIGHT</Text>
						</TouchableHighlight>
		    	</View>
		    	{content}
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

	getBackgroundPic(){
		this.weatherAPI.getBackgroundPic((response) =>{
			this.setState({
				back_image : response._bodyText,
			})
		});
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
		super.componentWillMount(this._getData.bind(this));
	}
	
	_getData(){
		this.getBackgroundPic.bind(this)();
		this.getWeather.bind(this)();
	}
}
