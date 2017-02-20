城市查询一级接口：
http://guolin.tech/api/china

```java
[{"id":1,"name":"北京"},{"id":2,"name":"上海"},{"id":3,"name":"天津"},{"id":4,"name":"重庆"},{"id":5,"name":"香港"},{"id":6,"name":"澳门"},{"id":7,"name":"台湾"},{"id":8,"name":"黑龙江"},{"id":9,"name":"吉林"},{"id":10,"name":"辽宁"},{"id":11,"name":"内蒙古"},{"id":12,"name":"河北"},{"id":13,"name":"河南"},{"id":14,"name":"山西"},{"id":15,"name":"山东"},{"id":16,"name":"江苏"},{"id":17,"name":"浙江"},{"id":18,"name":"福建"},{"id":19,"name":"江西"},{"id":20,"name":"安徽"},{"id":21,"name":"湖北"},{"id":22,"name":"湖南"},{"id":23,"name":"广东"},{"id":24,"name":"广西"},{"id":25,"name":"海南"},{"id":26,"name":"贵州"},{"id":27,"name":"云南"},{"id":28,"name":"四川"},{"id":29,"name":"西藏"},{"id":30,"name":"陕西"},{"id":31,"name":"宁夏"},{"id":32,"name":"甘肃"},{"id":33,"name":"青海"},{"id":34,"name":"新疆"}]
```

城市查询二级接口
http://guolin.tech/api/china/一级接口的返回省代码

```java
例子：http://guolin.tech/api/china/23
[{"id":205,"name":"广州"},{"id":206,"name":"韶关"},{"id":207,"name":"惠州"},{"id":208,"name":"梅州"}
,{"id":209,"name":"汕头"},{"id":210,"name":"深圳"},{"id":211,"name":"珠海"},{"id":212,"name":"顺德"},
{"id":213,"name":"肇庆"},{"id":214,"name":"湛江"},{"id":215,"name":"江门"},{"id":216,"name":"河源"},
{"id":217,"name":"清远"},{"id":218,"name":"云浮"},{"id":219,"name":"潮州"},{"id":220,"name":"东莞"},
{"id":221,"name":"中山"},{"id":222,"name":"阳江"},{"id":223,"name":"揭阳"},{"id":224,"name":"茂名"},
{"id":225,"name":"汕尾"}]
```
城市查询三级接口
http://guolin.tech/api/china/一级接口的返回省代码/二级查询返回的市代码

```java
例子：http://guolin.tech/api/china/23/205
[{"id":1525,"name":"广州","weather_id":"CN101280101"},{"id":1526,"name":"番禺","weather_id":"CN101280102"},
{"id":1527,"name":"从化","weather_id":"CN101280103"},{"id":1528,"name":"增城","weather_id":"CN101280104"},
{"id":1529,"name":"花都","weather_id":"CN101280105"}]
```

天气查询主接口,其中吧，cityid就是三级查询到的weather_id,key就是和风天气的key
http://guolin.tech/api/weather?cityid=?&key=?

```java
http://guolin.tech/api/weather?cityid=CN101280101&key=70ae0fa5842b4616b5f1cc8b41c06f4b

{"HeWeather": [{"aqi":{"city":{"aqi":"91","co":"1","no2":"103","o3":"8","pm10":"107","pm25":"67","qlty":"良","so2":"18"}},"basic":{"city":"广州","cnty":
"中国","id":"CN101280101","lat":"23.108000","lon":"113.265000","update":{"loc":"2017-02-18 08:51","utc":"2017-02-18 00:51"}},"daily_forecast":[{"astro":{"mr":"null","ms":"11:35","sr":"06:56","ss":"18:24"},"cond":{"code_d":"101",
"code_n":"101","txt_d":"多云","txt_n":"多云"},"date":"2017-02-18","hum":"53","pcpn":"0.0","pop":"0","pres":"1021","tmp":{"max":"27","min":"16"},"uv":"9","vis":"10","wind":{"deg":"96","dir":"无持续风向","sc":"微风",
"spd":"6"}},{"astro":{"mr":"00:50","ms":"12:16","sr":"06:56","ss":"18:25"},"cond":{"code_d":"305","code_n":"305","txt_d":"小雨","txt_n":"小雨"},"date":"2017-02-19","hum":"66","pcpn":"0.0","pop":"0","pres":"1018","tmp":{"max":"24","min":"16"},"uv":"9","vis":"10","wind":{"deg":"165","dir":"无持续风向","sc":"微风","spd":"8"}},{"astro":{"mr":"01:40","ms":"12:59","sr":"06:55","ss":"18:25"},"cond":{"code_d":"300","code_n":"300","txt_d":"阵雨","txt_n":"阵雨"},
"date":"2017-02-20","hum":"71","pcpn":"0.2","pop":"85","pres":"1015","tmp":{"max":"24","min":"17"},"uv":"5","vis":"10","wind":{"deg":"130","dir":"无持续风向","sc":"微风","spd":"3"}}],"hourly_forecast":[{"cond":{"code":"100","txt":"晴"},"date":"2017-02-18 10:00","hum":"49","pop":"0","pres":"1022","tmp":"27","wind":{"deg":"128","dir":"东南风","sc":"微风","spd":"3"}},
{"cond":{"code":"100","txt":"晴"},"date":"2017-02-18 13:00","hum":"37","pop":"0","pres":"1020","tmp":"31","wind":{"deg":"103","dir":"东南风","sc":"微风","spd":"5"}},{"cond":{"code":"100","txt":"晴"},"date":"2017-02-18 16:00","hum":"32","pop":"0","pres":"1018","tmp":"32","wind":{"deg":"118","dir":"东南风","sc":"微风","spd":"8"}},
{"cond":{"code":"100","txt":"晴"},"date":"2017-02-18 19:00","hum":"49","pop":"0","pres":"1019","tmp":"30","wind":{"deg":"157","dir":"东南风","sc":"微风","spd":"14"}},
{"cond":{"code":"100","txt":"晴"},"date":"2017-02-18 22:00","hum":"67","pop":"0","pres":"1020","tmp":"27","wind":{"deg":"159","dir":"东南风","sc":"微风","spd":"14"}}],"now":{"cond":{"code":"101","txt":"多云"},"fl":"17","hum":"86","pcpn":"0","pres":"1022","tmp":"15","vis":"7","wind":{"deg":"142","dir":"东风","sc":"微风","spd":"8"}},"status":"ok","suggestion":{"air":{"brf":"中","txt":"气象条件对空气污染物稀释、扩散和清除无明显影响，易感人群应适当减少室外活动时间。"},"comf":{"brf":"较舒适","txt":"白天天气晴好，您在这种天气条件下，会感觉早晚凉爽、舒适，午后偏热。"},
"cw":{"brf":"较适宜","txt":"较适宜洗车，未来一天无雨，风力较小，擦洗一新的汽车至少能保持一天。"},"drsg":{"brf":"舒适","txt":"建议着长袖T恤、衬衫加单裤等服装。年老体弱者宜着针织长袖衬衫、马甲和长裤。"},"flu":{"brf":"较易发","txt":"昼夜温差较大，较易发生感冒，请适当增减衣服。体质较弱的朋友请注意防护。"},"sport":{"brf":"较适宜","txt":"天气较好，户外运动请注意防晒。推荐您进行室内运动。"},"trav":{"brf":"适宜","txt":"天气较好，但丝毫不会影响您出行的心情。温度适宜又有微风相伴，适宜旅游。"},"uv":{"brf":"弱","txt":"紫外线强度较弱，建议出门前涂擦SPF在12-15之间、PA+的防晒护肤品。"}}}]}
```

上面太绕了，我们来看一个简化版本的：

```java
{
  "HeWeather:"[
  {
    "status": "ok",
    "basic": {},
    "api": {},
    "now": {},
    "suggestion": {},
    "daily_forecast": []
  }
  ]
}
```
背景贴图接口:   http://guolin.tech/api/bing_pic

数据返回，必应每日贴图链接：

```java
http://cn.bing.com/az/hprichbg/rb/YorkshireWinter_ZH-CN9258658675_1920x1080.jpg
```
