'use strict';
import React from 'react';
import {
	Navigator,
	Text,
	View,
	TouchableOpacity,
	ActivityIndicator,
	ListView
} from 'react-native';

import CityList2 from './city_list2';
import {NavigatormaperStyle} from '../style/NavigatormaperStyle';
import styles from '../style/CommonStyle';
import WeatherAPI from '../api/WeatherAPI';
import WeatherBaseComponent from '../base/WeatherBaseComponent';

export default class CityList extends WeatherBaseComponent {

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
	componentWillMount(){
		super.componentWillMount(this.getCityListData.bind(this));
	}

	//获取城市列表数据
	getCityListData(){
		this.weatherAPI.getCity(this.props.provinceId,(json)=>{
			console.log(json);
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
				}
			})
		}
	}

	render(){

		const spinner = this.state.isLoading ? (
			<ActivityIndicator
				style = {styles.loading}
				hidden = 'true'
				size = 'large'/>
		) : (
			<View/>
		);

		return(
			<View style={styles.container}>

				<View
					style={NavigatormaperStyle.container}
					hidden = {!this.state.isLoading}>

					<TouchableOpacity
						style={NavigatormaperStyle.left}

						onPress={this.onLeftOnClick.bind(this)}>

						<Text style={NavigatormaperStyle.leftButton}>BACK</Text>

					</TouchableOpacity>

					<TouchableOpacity style={NavigatormaperStyle.center}>

						<Text style={NavigatormaperStyle.title}>
							{this.props.provinceName}
						</Text>

					</TouchableOpacity>

					<TouchableOpacity style={NavigatormaperStyle.right}>

						<Text style={NavigatormaperStyle.rightButton}>RIGHT</Text>

					</TouchableOpacity>

				</View>

				{spinner}

				<ListView
					enableEmptySections={true}
					dataSource={this.state.dataSource}
					renderRow={this.renderRow.bind(this)}
					/>

			</View>
		);
	}

	renderRow(rowData,sectionID,rowID){
		return(
			<TouchableOpacity
				onPress={this.onPress.bind(this,rowData,sectionID,rowID)}
				>

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

			</TouchableOpacity>
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
