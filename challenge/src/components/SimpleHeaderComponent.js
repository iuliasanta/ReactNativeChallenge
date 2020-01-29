import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles/SimpleHeaderStyle';
export default class SimpleHeaderComponent extends Component {
  render() {
    const {title} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.titleStyle}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </View>
    );
  }
}
