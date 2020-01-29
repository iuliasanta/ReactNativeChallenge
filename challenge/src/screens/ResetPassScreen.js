import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles/ResetPassScreenStyle';
import LinearGradient from 'react-native-linear-gradient';
import appStrings from '../config/appStrings';
import RoundedButton from '../components/RoundedButton';
import appStyles from '../config/appStyles';
import Input from '../components/Input';
import HeaderComponent from '../components/HeaderComponent';
import {resetPassword} from '../network/PasswordRequests';

export default class ResetPassScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      header: null,
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      code: '',
      password: '',
      errorMessage: null,
    };
  }

  onPressUpdate = () => {
    this.handleResetPassword();
  };

  handleCodeChange = value => {
    this.setState({
      code: value,
      errorMessage: null,
    });
  };
  handlePasswordChange = value => {
    this.setState({password: value});
  };

  handleResetPassword = async () => {
    const {code, password} = this.state;
    const {navigation} = this.props;
    const {email} = navigation.state.params;
    try {
      const response = await resetPassword(email, code, password);
      navigation.navigate('Main', {data: response});
    } catch (error) {
      this.setState({errorMessage: 'error'});
    }
  };

  render() {
    const {DARK_ORANGE, LIGHT_ORANGE, YELLOW} = appStyles.color;
    const {password, code, errorMessage} = this.state;
    return (
      <View style={styles.container}>
        <LinearGradient
          style={styles.container}
          colors={[YELLOW, LIGHT_ORANGE, DARK_ORANGE]}>
          <HeaderComponent
            title={appStrings.RESET_PASS}
            onPress={() => this.props.navigation.navigate('Forgot')}
          />
          <View style={styles.content}>
            <Text style={styles.titleStyle}>
              An email with a 6 digit code has been sent to you. Please enter
              the code below
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Input
              fieldLabel={appStrings.MIN_6DIGITS}
              textLabel={appStrings.FROM_EMAIL}
              onTextChange={this.handleCodeChange}
              value={code}
            />
          </View>
          <View style={styles.inputContainer}>
            <Input
              fieldLabel={appStrings.NEW_PASSWORD}
              textLabel={appStrings.MIN_6CHAR}
              onTextChange={this.handlePasswordChange}
              value={password}
              autoCompleteType={'password'}
              secureTextEntry={true}
            />
          </View>
          {errorMessage !== null ? (
            <View style={styles.errorMessageContainer}>
              <Text style={styles.erorrMessage}>{appStrings.CODE_ERROR}</Text>
            </View>
          ) : null}
          <RoundedButton
            title={appStrings.UPDATE}
            onPress={this.onPressUpdate}
          />
          <View style={styles.bottomContainer}>
            <Text style={styles.termsStyle}>{appStrings.BY_SIGNING_IN}</Text>
            <Text style={styles.secondTermStyle}>
              {appStrings.GENERAL_TERMS}
            </Text>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
