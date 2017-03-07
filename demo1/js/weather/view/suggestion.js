'use strict';
import React,{Component} from 'react';
import {
	Text,
	View,
} from 'react-native';

import SuggestionStyle from '../style/SuggestionStyle';

class suggestion extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
        <View style={SuggestionStyle.container}>
          <Text style={SuggestionStyle.suggestionTitle}>
            生活建议
          </Text>
          <View style={SuggestionStyle.suggestionContainer}>
            <Text style={SuggestionStyle.content}>
              空气条件:{this.props.suggestion.air.txt}
            </Text>
            <Text style={SuggestionStyle.content}>
              舒适度:{this.props.suggestion.comf.txt}
            </Text>
            <Text style={SuggestionStyle.content}>
              洗车指数:{this.props.suggestion.drsg.txt}
            </Text>
            <Text style={SuggestionStyle.content}>
              穿衣建议:{this.props.suggestion.flu.txt}
            </Text>
            <Text style={SuggestionStyle.content}>
              运动建议:{this.props.suggestion.sport.txt}
            </Text>
            <Text style={SuggestionStyle.content}>
              出行建议:{this.props.suggestion.trav.txt}
            </Text>
            <Text style={SuggestionStyle.content}>
              防晒建议:{this.props.suggestion.uv.txt}
            </Text>
          </View>
        </View>
    );
  }
}
module.exports = suggestion;
