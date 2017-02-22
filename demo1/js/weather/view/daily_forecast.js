import React, {Component} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ListView,
}from 'react-native';

import DailyForecastStyle from '../style/DailyForecastStyle';

class dailyForeCast extends Component{
    constructor(props){
      super(props);
    }

    render(){
      var show = (this.props.daily_forecast !== null);
      //内容展示
      const content = show ? (
          <Text>
            预报
          </Text>
           ) : (<ActivityIndicator
             hidden = 'true'
             size = 'large'/>);
             return(
               content
             );
    }
}

module.exports = dailyForeCast;
