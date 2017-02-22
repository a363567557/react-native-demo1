import React from 'react';
import {
	Navigator,
	Text,
	View,
	TouchableOpacity,
	TouchableHighlight,
	ActivityIndicator,
	ListView
} from 'react-native';

import CityList from './city_list';
import styles from '../style/CommonStyle';
import WeatherAPI from '../api/WeatherAPI';
import WeatherBaseComponent from '../base/WeatherBaseComponent';

export default class ProvinceList extends WeatherBaseComponent {

	constructor(props){
		super(props);
		this.weatherAPI = new WeatherAPI();
		const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>(r1 !== r2)});
		this.state = {
			isLoading : true,
			dataSource:ds.cloneWithRows(this._getRowsStatic())
		};
	}


	render(){
		const spinner = this.state.isLoading ? (
			<ActivityIndicator
				hidden = 'true'
				size = 'large'/>) : (<View/>);
		return(
			<View style={styles.container}>
				<ListView
					dataSource={this.state.dataSource}
					enableEmptySections={true}
					renderRow={this._renderRow.bind(this)}
				/>
			{spinner}
		</View>

		);
	}

  //通过这个方法，执行耗时操作
	componentWillMount(){
		super.componentDidMount();
		this._executeQuery();
	}

	_getRowsStatic(){
		const dataBlob = [''];
		return dataBlob;
	}

	_getRows(){
		var response = _executeQuery();
		return response;
	}

	_executeQuery(){
		this.weatherAPI.getPovince((json)=>{
			this.setState({
				isLoading: false,
				dataSource: this.state.dataSource.cloneWithRows(json),
				})
			});
	}

	_renderRow(rowData,sectionID,rowID){
		return(
			<TouchableHighlight
				onPress={()=> this.rowPressed(rowData, sectionID, rowID)}
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

	rowPressed(rowData, sectionID, rowID) {
		const { navigator } = this.props;
		if(navigator) {
			navigator.push({
				name: CityList + '',
				component: CityList,
				params: {
					rowData: rowData,
					sectionID: sectionID,
					rowID: rowID,
					provinceName:rowData.name,
					provinceId:rowData.id,
					url:this.URL,
				}
			});
		}

	}
}
