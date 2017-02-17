import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
    ListView
} from 'react-native';

import Weather from './weather';


export default class CityList extends React.Component {
	constructor(props){
		super(props);
		const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>(r1!==r2)});
		this.state={
			dataSource:ds.cloneWithRows(this._getRows())
		};
	}
	
	_getRows(){
		const dataBlob = ['广州市','深圳市','珠海市','汕头市','韶关市','辽宁省','佛山市','江门市','湛江市','茂名市','肇庆市','惠州市','梅州市','汕尾市','河源市','阳江市','清远市','东莞市','中山市'];
		return dataBlob;
	}
	
	_onPress(rowData,sectionID,rowID){
		const navigator = this.props.navigator;
		if(navigator){
			navigator.push({
				name:Weather+'',
				component:Weather,
				params:{
					rowData:rowData,
					sectionID:sectionID,
					rowID:rowID
				}
			})
		}
	}
	
	render(){
		return(
			<View>
			<Text>{this.props.rowData}</Text>
			<ListView 
				dataSource={this.state.dataSource}
				renderRow={this._renderRow.bind(this)}
			/>
			</View>
		);
	}
	
	_renderRow(rowData,sectionID,rowID){
		return(
			<Text onPress={this._onPress.bind(this,rowData,sectionID,rowID)}>{rowData}</Text>
		);
	}
}