'use strict';
var BASE_URL = "http://guolin.tech/api/";
var CITY_URL = BASE_URL;
var WEATHER_URL = BASE_URL + "/weather";
//密钥
var KEY = "70ae0fa5842b4616b5f1cc8b41c06f4b";

function fetchData(URL){
  return fetch(URL).
  then((response) => response.json())
  then((responseJson) =>{
    return responseJson;
  })
  .catch(function(error){
    console.log("error = " + error);
  })
}

module.exports = {

  getPovince(){
    var URL = BASE_URL + "/china";
    console.log();
    return fetchData(URL);
  },

  getCity(provinceCode){
    var URL = BASE_URL + "/" + provinceCode;
    return fetchData(URL);
  },

  getWeatherId(provinceCode,cityCode){
    var URL = BASE_URL + "/" + provinceCode + "/" + cityCode;
    return fetchData(URL);
  },

  getWeather(weather_id){
    var URL = WEATHER_URL + "?cityid=" + weather_id + "&key=" + KEY;
    return fetchData(URL);
  }
}
