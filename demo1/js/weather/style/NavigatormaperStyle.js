import {StyleSheet} from 'react-native';

export const NavigatormaperStyle = StyleSheet.create({
	container:{
		flexDirection:'row',
		height:60,
	},

	left: {
		paddingLeft:20,
		paddingRight:20,
		backgroundColor: '#48BBEC',
		alignItems:'center',
		justifyContent:'center',
	},
	center: {
		flex:1,
		backgroundColor: '#48BBEC',
		alignItems:'center',
		justifyContent:'center',
	},
	right: {
		paddingLeft:20,
		paddingRight:20,
		backgroundColor: '#48BBEC',
		alignItems:'center',
		justifyContent:'center',
	},

	leftButton:{
		color: '#fff',
		fontSize: 20,

	},

	rightButton:{
		fontSize: 20,
		color: '#fff',
	},

	title:{
		fontSize: 20,
		color: '#fff',
	},

});
