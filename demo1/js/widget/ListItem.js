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

    _showhideItems(){
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
                    onPress={this._showhideItems.bind(this)}>
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
                    outputRange: [0, 200]
                }),
                overflow: 'hidden'
                }}
                >
                    <View style={styles.infoContainer}>
                        <View style={styles.rowContainer}>
                            <Text style={styles.titleText}>
                                日出
                            </Text>
                            <Text style={styles.colon}>
                                :
                            </Text>
                            <Text style={styles.infoText}>
                                {this.state.rowData.astro.sr}
                            </Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.titleText}>
                                日落
                            </Text>
                            <Text style={styles.colon}>
                                :
                            </Text>
                            <Text style={styles.infoText}>
                                {this.state.rowData.astro.ss}
                            </Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.titleText}>
                                降雨概率
                            </Text>
                            <Text style={styles.colon}>
                                :
                            </Text>
                            <Text style={styles.infoText}>
                                {this.state.rowData.pop}
                            </Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.titleText}>
                                相对湿度
                            </Text>
                            <Text style={styles.colon}>
                                :
                            </Text>
                            <Text style={styles.infoText}>
                                {this.state.rowData.hum}
                            </Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.titleText}>
                                风向
                            </Text>
                            <Text style={styles.colon}>
                                :
                            </Text>
                            <Text style={styles.infoText}>
                                {this.state.rowData.wind.dir}
                            </Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.titleText}>
                                风速
                            </Text>
                            <Text style={styles.colon}>
                                :
                            </Text>
                            <Text style={styles.infoText}>
                                {this.state.rowData.wind.spd}
                            </Text>
                        </View>

                        <View style={styles.rowContainer}>
                            <Text style={styles.titleText}>
                                风力
                            </Text>
                            <Text style={styles.colon}>
                                :
                            </Text>
                            <Text style={styles.infoText}>
                                {this.state.rowData.wind.sc}
                            </Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.titleText}>
                                降水量
                            </Text>
                            <Text style={styles.colon}>
                                :
                            </Text>
                            <Text style={styles.infoText}>
                                {this.state.rowData.pcpn}
                            </Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.titleText}>
                                气压
                            </Text>
                            <Text style={styles.colon}>
                                :
                            </Text>
                            <Text style={styles.infoText}>
                                {this.state.rowData.pres}
                            </Text>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.titleText}>
                                能见度
                            </Text>
                            <Text style={styles.colon}>
                                :
                            </Text>
                            <Text style={styles.infoText}>
                                {this.state.rowData.vis}
                            </Text>
                        </View>

                    </View>
                </Animated.View>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',

        // width: Dimensions.get('window').width,
        backgroundColor: '#aa78d1dd',
    },
    title: {
        padding: 10,
        fontSize: 20,
        color: '#fff',
    },
    rowContainer: {
        flexDirection: 'row',

        // width: Dimensions.get('window').width,
        height: 60,
    },
    date: {
        flex: 2,
        flexDirection: 'row',
        paddingTop: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingLeft: 10,
        textAlign: 'left',
        fontSize: 18,
        // backgroundColor: '#48BBEC',
        fontWeight: 'bold',
        color: '#fff',
    },
    weather: {
        flex: 1,
        paddingTop: 20,
        textAlign: 'center',
        fontSize: 18,
        alignItems:'center',
        color: '#fff',
    },
    maxTemp: {
        flex: 1,
        paddingTop: 20,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 18,
        color: '#fff',
    },
    minTemp: {
        textAlign: 'center',
        paddingTop: 20,
        fontSize: 18,
        paddingRight: 20,
        color: '#fff',
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 20,
    },
    rowContainer: {
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

});

module.exports = ListItem;