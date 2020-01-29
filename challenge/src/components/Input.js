import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles/InputStyle';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      fieldLabel,
      textLabel,
      value,
      onTextChange,
      autoCompleteType,
      secureTextEntry,
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.labelContainer}>
          <Text style={styles.labelTextBold}>{fieldLabel}</Text>
          <Text style={styles.labelText}>{textLabel}</Text>
        </View>
        <View>
          <TextInput
            value={value}
            onChangeText={onTextChange}
            style={styles.inputContainer}
            autoCompleteType={autoCompleteType}
            secureTextEntry={secureTextEntry}
          />
        </View>
      </View>
    );
  }
}
