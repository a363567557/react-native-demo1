'use strict';
import React,{Component} from 'react';
import {
	Text,
	View,
} from 'react-native';

import AirQualityStyle from '../style/AirQualityStyle';

class airQuality extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
			<View style={AirQualityStyle.container}>
        <Text style={AirQualityStyle.aqiTitle}>
          空气质量
        </Text>
        <View style={AirQualityStyle.aqiContainer}>
          <View style={AirQualityStyle.subContainer}>
            <View style={AirQualityStyle.pointContainer}>
              <Text style={AirQualityStyle.point}>
                {this.props.aqi.city.aqi}
              </Text>
            </View>
            <Text style={AirQualityStyle.title}>
              AQI指数
            </Text>
          </View>
          <View style={AirQualityStyle.subContainer}>
            <View style={AirQualityStyle.pointContainer}>
              <Text style={AirQualityStyle.point}>
                {this.props.aqi.city.pm25}
              </Text>
            </View>
            <Text style={AirQualityStyle.title}>
              PM2.5指数
            </Text>
          </View>
        </View>
			</View>
    );
  }
}
module.exports = airQuality;
