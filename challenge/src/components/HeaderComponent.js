import React, {Component} from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import styles from './styles/HeaderComponentStyle';
import appAssets from '../config/appAssets';
export default class HeaderComponent extends Component {
  render() {
    const {title, onPress} = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.arrowStyle} onPress={onPress}>
          <Image source={appAssets.back} />
        </TouchableOpacity>
        <View style={styles.titleStyle}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </View>
    );
  }
}
