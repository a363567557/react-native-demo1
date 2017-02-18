import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
    ListView,
    TouchableHighlight
} from 'react-native';

import Weather from './weather';
import {NavigatormaperStyle} from './style/NavigatormaperStyle';

export default class CityList extends React.Component {
	constructor(props){
		super(props);
		const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>(r1!==r2)});
		this.state={
			dataSource:ds.cloneWithRows(this.getRows())
		};
	}
	
	getRows(){
		const dataBlob = ['广州市','深圳市','珠海市','汕头市','韶关市','辽宁省','佛山市','江门市','湛江市','茂名市','肇庆市','惠州市','梅州市','汕尾市','河源市','阳江市','清远市','东莞市','中山市'];
		return dataBlob;
	}
	
	onPress(rowData,sectionID,rowID){
		let navigator = this.props.navigator;
		if(navigator){
			navigator.push({
				name:Weather+'',
				component:Weather,
				params:{
					rowData:rowData,
					sectionID:sectionID,
					rowID:rowID,
					cityName:rowData,
					cityId:null,
				}
			})
		}
	}
	
	render(){
		return(
			<View>
				<View style={NavigatormaperStyle.container}>
		    			<TouchableHighlight style={NavigatormaperStyle.leftButton} onPress={this.onLeftOnClick.bind(this)}>
		    				<Text>left</Text>
		    			</TouchableHighlight>
					    <TouchableHighlight style={NavigatormaperStyle.title}>
					    	<Text>{this.props.provinceName}</Text>
					    </TouchableHighlight>
					    <TouchableHighlight style={NavigatormaperStyle.rightButton}>
						    <Text>right</Text>
						</TouchableHighlight>
		    	</View>
				<ListView 
					style={{backgroundColor:'#ff0000'}}
					dataSource={this.state.dataSource}
					renderRow={this.renderRow.bind(this)}
				/>
			</View>
		);
	}
	
	renderRow(rowData,sectionID,rowID){
		return(
			<Text onPress={this.onPress.bind(this,rowData,sectionID,rowID)}>{rowData}</Text>
		);
	}
	
	onLeftOnClick(){
		this.onBack();
	}
	
	onBack(){
		let navigator = this.props.navigator;
		if(navigator){
			navigator.pop();
		}
	}
}