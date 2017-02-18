import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	Navigator,
	TouchableOpacity,
	TouchableHighlight,
	ActivityIndicator,
	ListView
} from 'react-native';

import City from './city_list';
//把样式抽离，独立成为一个文件
import styles from './style/CommonStyle';

export default class ProvinceList extends Component {

	constructor(props){
		super(props);
		const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>(r1 !== r2)});
		this.state = {
			isLoading : true,
			dataSource:ds.cloneWithRows(this._getRowsStatic())
		};
	}


	render(){
		var spinner = this.state.isLoading ? (
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
	componentDidMount(){
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
		var URL = "http://guolin.tech/api/china";
		fetch(URL)
		.then(response => response.json())
		.then((json) =>{
			console.log(json);
			this.setState({
				isLoading: false,
				//直接传递json数组下去
				dataSource: this.state.dataSource.cloneWithRows(json),
			})
		})
		.catch((error) =>{
			console.log(error);
		})
	}

	_renderRow(rowData,sectionID,rowID){
		return(
			<TouchableHighlight
			onPress={()=> this.rowPressed(rowData)}
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

	rowPressed(rowData){
		this.props.navigator.push({
			title: rowData.name,
			index: 1,
			component: City,
			passProps: {cityid: rowData.id}
		});
	}
}
