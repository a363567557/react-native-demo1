/**
 * Created by lixinkun on 2017/3/6.
 */
'use-strict';
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Animated,
} from 'react-native';


class ListItem extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ...props,
            showAnim: new Animated.Value(0)
        };
        this.showorhide = 0;
    };

    _showHideItems(){
        if (typeof(this.state.rowData) == 'undefined' || this.state.rowData == null){
            return;
        }
        Animated.timing(
            this.state.showAnim,
            {
                toValue: this.showorhide == 0 ? 1 : 0
            }
        ).start();
        this.showorhide = this.showorhide == 0? 1 : 0;
    };

    render() {
        return(
            <View>
                <TouchableOpacity
                    onPress={this._showHideItems.bind(this)}>
                    {/*此处为头部*/}
                    <View style={styles.rowContainer}>
                        <Text style={styles.date}>
                            {this.state.rowData.date}
                        </Text>
                        <Text style={styles.weather}>
                            {this.state.rowData.cond.txt_d}
                        </Text>
                        <Text style={styles.maxTemp}>
                            {this.state.rowData.tmp.max}
                        </Text>
                        <Text style={styles.minTemp}>
                            {this.state.rowData.tmp.min}
                        </Text>
                    </View>

                </TouchableOpacity>
                {/*此处为展开的view*/}
                <Animated.View
                style={{height: this.state.showAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 240]
                }),
                overflow: 'hidden'
                }}
                >
                    <View style={styles.infoContainer}>
                        <Item name = "日出" value = {this.state.rowData.astro.sr}/>
                        <Item name = "日落" value = {this.state.rowData.astro.ss}/>
                        <View style={styles.empty}></View>
                        <Item name = "降雨概率" value = {this.state.rowData.pop + "%"}/>
                        <Item name = "湿度" value = {this.state.rowData.hum + "%"}/>
                        <View style={styles.empty}></View>
                        <Item name = "风向" value = {this.state.rowData.wind.dir}/>
                        <Item name = "风速" value = {this.state.rowData.wind.spd}/>
                        <Item name = "风力" value = {this.state.rowData.wind.sc + "级"}/>
                        <View style={styles.empty}></View>
                        <Item name = "降水量" value = {this.state.rowData.pcpn + "毫米"}/>
                        <Item name = "气压" value = {this.state.rowData.pres + "百帕"}/>
                        <Item name = "能见度" value = {this.state.rowData.vis + "公里"}/>
                    </View>
                </Animated.View>
            </View>
        )
    };
}

class Item extends Component{
    constructor(props){
        super(props);
        this.state = {
            ...props,
        }
    }
    render() {
        return (
            <View style={styles.detailRowContainer}>
                <Text style={styles.titleText}>
                    {this.state.name}
                </Text>
                <Text style={styles.colon}>
                    :
                </Text>
                <Text style={styles.infoText}>
                    {this.state.value}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#aa78d1dd',
    },
    title: {
        padding: 10,
        fontSize: 20,
        color: '#fff',
    },
    rowContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    date: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingLeft: 10,
        textAlign: 'left',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    weather: {
        flex: 1,

        textAlign: 'center',
        fontSize: 18,
        alignItems:'center',
        color: '#fff',
    },
    maxTemp: {
        flex: 1,

        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 18,
        color: '#fff',
    },
    minTemp: {
        textAlign: 'center',

        fontSize: 18,
        paddingRight: 20,
        color: '#fff',
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    detailRowContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    infoText: {
        flex: 1,
        fontSize: 18,
        color: 'white',
        textAlign: 'left'
    },
    colon: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        paddingRight: 20,
    },
    titleText: {
        flex: 1,
        fontSize: 18,
        color: 'white',
        textAlign: 'right'
    },
    empty: {
      height: 10,
    },

});

module.exports = ListItem;