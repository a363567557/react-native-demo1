import React from 'react';

import {
	Platform,
	BackAndroid,
	ToastAndroid,
	NativeModules,
	Navigator,
	Text,
	View,
	TouchableOpacity,
	TouchableHighlight,
	ActivityIndicator,
	ListView
} from 'react-native';

export default class WeatherBaseComponent extends React.Component {

	componentDidMount() {
		this.addBackAndroidListener();
	}

	componentWillUnmount() {
		this.removeBackAndroidListener();
	}

	// 监听返回键事件  
	addBackAndroidListener() {
		if(Platform.OS === 'android') {
			BackAndroid.addEventListener('hardwareBackPress', () => {
				return this.onBackAndroid(this.props.navigator);
			});
		}
	}

	// 移除监听  
	removeBackAndroidListener() {
		if(Platform.OS === 'android') {
			BackAndroid.removeEventListener('hardwareBackPress', () => {});
		}
	}

	// 判断是返回上一页还是退出程序  
	onBackAndroid(navigator) {
		if(!navigator) return false;
		const routers = navigator.getCurrentRoutes();
		// 当前页面不为root页面时的处理  
		if(routers.length > 1) {
			const top = routers[routers.length - 1];
			if(top.ignoreBack || top.component.ignoreBack) {
				// 路由或组件上决定这个界面忽略back键  
				return true;
			}
			const handleBack = top.handleBack || top.component.handleBack;
			if(handleBack) {
				// 路由或组件上决定这个界面自行处理back键  
				return handleBack();
			}
			// 默认行为： 退出当前界面。  
			navigator.pop();
			return true;
		}
		// 当前页面为root页面时的处理  
		if(this.lastBackPressed && (this.lastBackPressed + 800 >= Date.now())) {
			//最近2秒内按过back键，可以退出应用。  
//			NativeModules.CommonTools.onBackPressed();
			return false;
		}
		this.lastBackPressed = Date.now();
		ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
		return true;
	}

	// 自定义返回按钮事件  
	customHandleBack(navigator, handleBack) {
		if(navigator) {
			let routes = navigator.getCurrentRoutes(); //nav是导航器对象  
			let lastRoute = routes[routes.length - 1]; // 当前页面对应的route对象  
			lastRoute.handleBack = handleBack;
		}
	}
}