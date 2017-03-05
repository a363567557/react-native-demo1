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

    rowPressed(rowData){
      return(
        <View style={DailyForecastStyle.rowContainer}>
          <Text style={DailyForecastStyle.date}>
            {rowData.date}
          </Text>
        </View>
      );
    }

    _getRowsStatic(){
      const dataBlob = [''];
      return dataBlob;
    }

    //渲染item
    renderRow(rowData,sectionID,rowID){
      return(
        <TouchableHighlight
          onPress={()=> this.rowPressed(rowData)}
          underlayColor='#dddddd'>
          <View style={DailyForecastStyle.rowContainer}>
            <Text style={DailyForecastStyle.date}>
              {rowData.date}
            </Text>
            <Text style={DailyForecastStyle.weather}>
              {rowData.cond.txt_d}
            </Text>
            <Text style={DailyForecastStyle.maxTemp}>
              {rowData.tmp.max}
            </Text>
            <Text style={DailyForecastStyle.minTemp}>
              {rowData.tmp.min}
            </Text>
          </View>
        </TouchableHighlight>

      )
    }
}

module.exports = dailyForeCast;
