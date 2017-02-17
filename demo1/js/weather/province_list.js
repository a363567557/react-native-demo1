import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Navigator,
	ListView
} from 'react-native';

import CityList from './city_list'

export default class ProvinceList extends Component {
	
	constructor(props){
		super(props);
		const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>(r1 !== r2)});
		this.state = {
			dataSource:ds.cloneWithRows(this._getRows())
		};
	}
	
	
	render(){
		return(
			<ListView 
				dataSource={this.state.dataSource}
				renderRow={this._renderRow.bind(this)}
			/>
		);
	}
	
	
	_getRows(){
		const dataBlob = ['北京市','天津市','河北省','山西省','内蒙古自治区','辽宁省','吉林省','黑龙江省','上海市','江苏省','浙江省','安徽省','福建省','江西省','山东省','河南省','湖北省','湖南省','广东省','广西壮族自治区'];
		return dataBlob;
	}
	
	_renderRow(rowData,sectionID,rowID){
		return(
			<Text onPress={this._onPress.bind(this,rowData,sectionID,rowID)}>{rowData}</Text>
		);
	}
	
	_onPress(rowData,sectionID,rowID){
		const {navigator} = this.props;
		if(navigator){
			navigator.push({
				name:CityList+'',
				component:CityList,
				params:{
					rowData:rowData,
					sectionID:sectionID,
					rowID:rowID
				}
			});
		}
	}
}
