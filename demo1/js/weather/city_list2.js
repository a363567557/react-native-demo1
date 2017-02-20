import React from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
    ListView,
    TouchableHighlight,
    ActivityIndicator
} from 'react-native';

import Weather from './weather';
import {NavigatormaperStyle} from './style/NavigatormaperStyle';
import styles from './style/CommonStyle';
import WeatherAPI from './api/WeatherAPI';


export default class CityList2 extends React.Component {
	
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
		this.weatherAPI.getCountyCity(this.props.provinceId,this.props.cityId,(json)=>{
			this.setState({
				isLoading:false,
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
				name:Weather+'',
				component:Weather,
				params:{
					rowData:rowData,
					sectionID:sectionID,
					rowID:rowID,
					cityName:rowData.name,
					cityId:rowData.id,
					weatherId:rowData.weather_id,
				}
			})
		}
	}
	
	render(){
		const spinner = this.state.isLoading ? (
					<ActivityIndicator
						hidden = 'true'
						size = 'large'/>) : (<View/>);		
		return(
			<View>
				<View style={NavigatormaperStyle.container}>
		    			<TouchableHighlight style={NavigatormaperStyle.leftButton} onPress={this.onLeftOnClick.bind(this)}>
		    				<Text>left</Text>
		    			</TouchableHighlight>
					    <TouchableHighlight style={NavigatormaperStyle.title}>
					    	<Text>{this.props.provinceName}--{this.props.cityName}</Text>
					    </TouchableHighlight>
					    <TouchableHighlight style={NavigatormaperStyle.rightButton}>
						    <Text>right</Text>
						</TouchableHighlight>
		    	</View>
				<ListView 
					enableEmptySections={true}
					dataSource={this.state.dataSource}
					renderRow={this.renderRow.bind(this)}
				/>
				{spinner}
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