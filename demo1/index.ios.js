
'use strict';
// var SearchPage = require('./js/SearchPage');
import ViewLayout from './js/ViewLayout';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  TextInput,
  Image,
  TouchableOpacity,
  View
} from 'react-native';

class SearchHouse extends Component {

  configureScene(route, routeStack) {
    if (route.type == 'Modal') {
      return Navigator.SceneConfigs.FloatFromBottom;
    }
    return Navigator.SceneConfigs.PushFromRight;
  }

  render() {
    return (
      <Navigator
        style={{flex: 1}}
        initialRoute={{
          title: 'Property Finder',
          index: 0,
          component: ViewLayout
        }}
        configureScene={this.configureScene}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navContainer}
            routeMapper={NavigationBarRouteMapper}/>
        }
        renderScene={(route, navigator)=>{
          let Com = route.component;
          //传递navigator下去
          return <Com {...route.passProps} navigator={navigator}/>
        }}
        />
    );
  }
}

var NavigationBarRouteMapper = {
  LeftButton(route, navigator,index,  navState){
      if (index > 0){
        return (
          <View style={styles.navContainer}>
            <TouchableOpacity
              underlayColor='transparent'
              onPress={()=>{if(index>0){navigator.pop()}}}>
              <Text style={styles.leftNavButtonText}>
                Back
              </Text>
            </TouchableOpacity>
          </View>
        )
      }else {
        return null;
      }
  },
  // 右键
 RightButton(route, navigator, index, navState) {
   if (route.onPress)
     return (
       <View style={styles.navContainer}>
         <TouchableOpacity
           onPress={() => route.onPress()}>
           <Text style={styles.rightNavButtonText}>
             {route.rightText || '右键'}
           </Text>
         </TouchableOpacity>
       </View>
     );
 },
 // 标题
 Title(route, navigator, index, navState) {
   return (
     <View style={styles.navContainer}>
       <Text style={styles.title}>
          {route.title}
       </Text>
     </View>
   );
 }
};



var styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  navContainer: {
    backgroundColor: '#48BBEC',
    paddingTop: 12,
    paddingBottom: 10,
  },
  headText: {
    color: '#ffffff',
    fontSize: 22
  },
  button: {
    height: 60,
    marginTop: 10,
    justifyContent: 'center', // 内容居中显示
    backgroundColor: '#ff1049',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff'
  },
// 左面导航按钮
leftNavButtonText: {
  color: '#ffffff',
  fontSize: 18,
  marginLeft: 13
},
// 右面导航按钮
rightNavButtonText: {
  color: '#ffffff',
  fontSize: 18,
  marginRight: 13
},
// 标题
title: {
  width: 200,//不指定大小就不行，我纳闷了
  fontSize: 18,
  color: '#fff',
  justifyContent: 'center',
  textAlign: 'center',
  fontWeight: 'bold',
  flex: 1
},
});

AppRegistry.registerComponent('demo1', () => demo1);
