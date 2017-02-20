//天气请求api

export default class WeatherAPI{
	
	//请求封装
	fetchData(url,callBack){
		fetch(url)
			.then((response) => response.json())
	  		.then((json) =>{
	  			callBack(json);
	  		})
	  		.catch(function(error){
			    console.log("error = " + error);
			  	})
	}
	
	//省份数据
	getPovince(callBack){
		//json 是数组
		//json item 结构{id:123,name:abc}
		let url = WeatherAPI.BASE_URL + "/china";
		return this.fetchData('http://guolin.tech/api/china',callBack);
	}
	
	//一级城市
	getCity(provinceId,callBack){
		let url = WeatherAPI.BASE_URL + "/china/" + provinceId;
		console.log(url);
		return this.fetchData(url,callBack);
	}
	
	getCountyCity(provinceId,cityId,callBack){
		let url = WeatherAPI.BASE_URL + "/china/" + provinceId + "/" + cityId;
		return this.fetchData(url,callBack);
	}
	
	//获取天气
	getWeather(weatherId,callBack){
		let url = WeatherAPI.WEATHER_URL + "?cityid=" + weatherId + "&key=" + WeatherAPI.KEY;
		return this.fetchData(url,callBack);
	}
}

WeatherAPI.BASE_URL = 'http://guolin.tech/api';
WeatherAPI.WEATHER_URL = WeatherAPI.BASE_URL + '/weather';
WeatherAPI.KEY = '70ae0fa5842b4616b5f1cc8b41c06f4b';