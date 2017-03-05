'use strict';
import React ,{Component} from 'react';
import {
	Text,
	View,
	StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    };
  }

  onPress = () => {
    this.disable();
    const {onPress} = this.props;
    onPress(this.enable);
  };

  enable = () => {
    this.setState({
      disabled: false,
    });
  };

  disable = () => {
    this.setState({
      disabled: true,
    });
  };

  render(){
    const {text} = this.props;
    return (
      <TouchableOpacity
        disabled={this.state.disabled}
        style={[styles.button, this.state.disabled && styles.disabled]}
        onPress={this.onPress}>
        <Text style={styles.buttonText}>
          {text}
        </Text>
      </TouchableOpacity>
    )
  }
}

var styles = StyleSheet.create({
  button: {
    marginTop: 100,
    height: 40,
    width: 200,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  disabled: {
    backgroundColor: '#dddddd',
  }
});
