'use-strict';
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Button from './Button';


export default class Test extends Component {

  fetchData = (callBack) => {
    console.log("know");
    // this.refs.button.disable();
    this.timer = setTimeout (() => {
      callBack();
    },3000);
    // this.refs.button.enable();
  };
  render () {
    return (
        <Button refs="button" onPress={this.fetchData} text="submit" />
    );
  };

  componentWillUnmount(){
    this.timer && clearTimeOut(this.timer);
  };

}
