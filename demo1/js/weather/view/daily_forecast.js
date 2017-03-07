'use strict';
import React, {Component} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Alert,
  TouchableHighlight,
  ListView,
}from 'react-native';

import DailyForecastStyle from '../style/DailyForecastStyle';
import ListItem from '../../widget/ListItem';

class dailyForeCast extends Component{
    constructor(props){
      super(props);
      var ds = new ListView.DataSource(
        {rowHasChanged: (r1, r2) => r1 !== r2}
      );
      this.state = {
        dataSource: ds.cloneWithRows(this.props.daily_forecast),
      };

    }

    render(){
      var show = (this.props.daily_forecast !== null);
      //内容展示
      const content = show ? (
        <View style={DailyForecastStyle.container}>
          <Text style={DailyForecastStyle.title}>
            预报
          </Text>
          <ListView
            dataSource={this.state.dataSource}
            enableEmptySections={true}
            renderRow={this.renderRow.bind(this)}/>
        </View>
        ) : (<ActivityIndicator
             hidden = 'true'
             size = 'large'/>);
             return(
               content
             );
    }

    renderRow (rowData){
        return(
            <ListItem rowData = {rowData}/>
        )
    }
}

module.exports = dailyForeCast;
