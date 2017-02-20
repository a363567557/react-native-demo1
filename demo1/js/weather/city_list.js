import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
    ListView,
    TouchableHighlight
} from 'react-native';

import CityList2 from './city_list2';
import {NavigatormaperStyle} from './style/NavigatormaperStyle';
import styles from './style/CommonStyle';
import WeatherAPI from './api/WeatherAPI';


export default class CityList extends React.Component {
	
	constructor(props){
		super(props);
		this.weatherAPI = new WeatherAPI();
		this.ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>(r1!==r2)});
		this.state={
			isLoading:true,
			dataSource:this.ds.cloneWithRows(this.getRows()),
		};
	}
			
	//界面挂载完成回调
	componentDidMount(){
		this.getCityListData.bind(this)();
	}
	
	//获取城市列表数据
	getCityListData(){
		this.weatherAPI.getCity(this.props.provinceId,(json)=>{
			console.log(json);
			this.setState({
				dataSource:this.ds.cloneWithRows(json),
			})
		});
	}
	
	
	getRows(){
		const dataBlob = [];
		return dataBlob;
	}

	
	
	onPress(rowData,sectionID,rowID){
		let navigator = this.props.navigator;
		if(navigator){
			navigator.push({
				name:CityList2+'',
				component:CityList2,
				params:{
					rowData:rowData,
					sectionID:sectionID,
					rowID:rowID,
					provinceId:this.props.provinceId,
					provinceName:this.props.provinceName,
					cityName:rowData.name,
					cityId:rowData.id,
					url:this.URL,
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
					dataSource={this.state.dataSource}
					renderRow={this.renderRow.bind(this)}
				/>
			</View>
		);
	}
	
	renderRow(rowData,sectionID,rowID){
		return(
			<TouchableHighlight
				onPress={this.onPress.bind(this,rowData,sectionID,rowID)}
				underlayColor='#dddddd'>
				<View>
					<View style={styles.rowContainer}>
						<View style={styles.textContainer}>
							<Text style={styles.id}>
								{rowData.id}
							</Text>
							<Text style={styles.title}>
								{rowData.name}
							</Text>
						</View>
					</View>
					<View style={styles.separator}/>
				</View>
			</TouchableHighlight>
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