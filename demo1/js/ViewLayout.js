import React,{Component} from 'react';
importc {
  Text,
  Image,
  StyleSheet,
  View,
} from 'react-native';

var styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row'
  },
  cell: {
    flex: 1,
    height: 50,
    backgroundColor: '#aaaaaa'
  },
  welcome:{
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  cellfixed:{
    height: 50,
    width: 80,
    backgroundColor: '#fefefe'
  }
  container: {

  },
})

class View extends Component{
  render() {
    return(
      <Text style={styles.text, styles.header}>
        嵌套的网格布局
      </Text>
      <View style={{flexDirection: 'row', height: 200, backgroundColor: '#fefefe', padding: 20}}>
        <View style={{flex: 1, flexDirection: 'column', padding: 15, backgroundColor: '#eeeeee'}}>
          <View style={{flex: 1, backgroundColor: '#bbaaaa'}}>
          </View>
          <View style={{flex: 1, backgroundColor: '#aabbaa'}}>
          </View>
        </View>
      </View>
      <View style={{flex: 1, padding: 15, flexDirection: 'row', backgroundColor: '#eeeeee'}}>
        <View style={{flex: 1, backgroundColor: '#aaaabb'}}>
          <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#eeaaaa'}}>
            <View style={{flex: 1, backgroundColor: '#eebbaa'}}>
            </View>
            <View style={{flex: 1, backgroundColor: '#aabbcc'}}>
            </View>
          </View>
          <View style={{flex: 1, backgroundColor: 'eebbdd'}}>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor:"#aaccaa"}}>
         <ScrollView style={{flex: 1, backgroundColor:"#bbccdd", padding: 5}}>
               <View style={{flexDirection: 'row', height: 50, backgroundColor:"#fefefe"}}>
                 <View style={{flex: 1, flexDirection:'column', backgroundColor:"#eeeeee"}}>
                     <View style={{flex: 1, backgroundColor:"#bbaaaa"}}>
                     </View>
                     <View style={{flex: 1, backgroundColor:"#aabbaa"}}>
                     </View>
                 </View>
                 <View style={{flex: 1, flexDirection:'row', backgroundColor:"#eeeeee"}}>
                     <View style={{flex: 1, backgroundColor:"#aaaabb"}}>
                         <View style={{flex: 1, flexDirection:'row', backgroundColor:"#eeaaaa"}}>
                            <View style={{flex: 1, backgroundColor:"#eebbaa"}}>
                           </View>
                           <View style={{flex: 1, backgroundColor:"#bbccee"}}>
                           </View>
                         </View>
                         <View style={{flex: 1, backgroundColor:"#eebbdd"}}>
                         </View>
                     </View>
                     <View style={{flex: 1, backgroundColor:"#aaccaa"}}>
                     </View>
                 </View>
               </View>
               <Text style={[styles.text, styles.header, {color: '#ffffff', fontSize: 12}]}>
                 {(function(){
                   var str = '';
                   var n = 100;
                   while(n--) {
                     str += '嵌套的网格' + '\n';
                   }
                   return str;
                 })()}
               </Text>
         </ScrollView>
       </View>
      </View>
    );
  }
}
