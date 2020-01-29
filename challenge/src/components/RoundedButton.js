import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles/RoundedButtonStyles';
import LinearGradient from 'react-native-linear-gradient';
import appStyles from '../config/appStyles';

export default class RoundedButton extends React.Component {
  render() {
    const {title, onPress, buttonContainerStyle} = this.props;
    const {DARK_GREEN, LIGHT_GREEN} = appStyles.color;

    return (
      <TouchableOpacity
        style={[styles.buttonContainer, buttonContainerStyle]}
        onPress={onPress}>
        <LinearGradient
          style={styles.container}
          colors={[LIGHT_GREEN, DARK_GREEN]}
          start={{x: 0, y: 1}}
          end={{x: 1, y: 1}}>
          <Text style={styles.text}>{title}</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}
