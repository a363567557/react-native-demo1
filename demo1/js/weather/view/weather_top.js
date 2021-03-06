'use strict';
import React,{Component} from 'react';
import {
	Text,
	ActivityIndicator,
	View,
} from 'react-native';

import WeatherTopStyle from '../style/WeatherTopStyle';

class weatherTop extends Component{
  constructor(props){
    super(props);
  }
  render(){

	  //目前不需要使用延时加载策略了
      return(
		  <View style={WeatherTopStyle.container}>
			  <View style={WeatherTopStyle.cityAndTimeContainer}>
				  <Text style={WeatherTopStyle.city}>
                      {this.props.basic.city}
				  </Text>
				  <Text style={WeatherTopStyle.updateTime}>
                      {this.props.basic.update.loc.substring(11, 16)}
				  </Text>
			  </View>
			  <View style={WeatherTopStyle.temperatureContainer}>
				  <Text style={WeatherTopStyle.temperature}>
                      {this.props.nowWeather.tmp}°C
				  </Text>
			  </View>
			  <View style={WeatherTopStyle.weatherInfoContainer}>
				  <Text style={WeatherTopStyle.weatherInfoStyle}>
                      {this.props.nowWeather.cond.txt}
				  </Text>
			  </View>
		  </View>
      );

  }
}
module.exports = weatherTop;
