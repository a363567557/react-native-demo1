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
import WeatherTop from '../view/weather_top';
import DailyForeCast from '../view/daily_forecast';

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

		const content = (this.state.weather !== null) ? (
			<ScrollView>
				<WeatherTop basic={this.state.basic} nowWeather={this.state.nowWeather}/>
				<DailyForeCast daily_forecast={this.state.daily_forecast}/>
			</ScrollView>
		) : (<View/>)

		return(
			<Image style={CommonStyle.back_image} source={{uri : this.state.back_image}}>
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
		this.getBackgroundPic.bind(this)();
		this.getWeather.bind(this)();
	}
}
