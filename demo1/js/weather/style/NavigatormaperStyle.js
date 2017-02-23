import {StyleSheet} from 'react-native';

export const NavigatormaperStyle = StyleSheet.create({
	container:{
		flexDirection:'row',
		height:60,
	},

	left: {
		flex:1,
		paddingLeft:20,
		paddingRight:20,
		backgroundColor: '#48BBEC',
		alignItems:'center',
		justifyContent:'center',
	},
	center: {
		flex:3,
		backgroundColor: '#48BBEC',
		alignItems:'center',
		justifyContent:'center',
	},
	right: {
		flex:1,
		paddingLeft:20,
		paddingRight:20,

		backgroundColor: '#48BBEC',
		alignItems:'center',
		justifyContent:'center',
	},

	leftButton:{
		color: '#fff',
		fontSize: 20,
		textAlign: 'left',
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
