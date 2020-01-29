import React from 'react';
import {View} from 'react-native';
import styles from './styles/ForgotPassScreenStyle';
import LinearGradient from 'react-native-linear-gradient';
import Validation from '../util/Validation';
import appStrings from '../config/appStrings';
import RoundedButton from '../components/RoundedButton';
import appStyles from '../config/appStyles';
import Input from '../components/Input';
import HeaderComponent from '../components/HeaderComponent';
import {mutateForgot} from '../network/PasswordRequests';

export default class ForgotPassScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      header: null,
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  handleInput = value => {
    this.setState({
      email: value,
      errorMessage: '',
    });
  };

  isFormValid = () => {
    let {email} = this.state;
    const validator = new Validation();
    return !validator.validateEmail(email);
  };

  onPressSend = () => {
    if (!this.isFormValid()) {
      this.setState({errorMessage: appStrings.ERROR_MESSAGE});
    } else {
      this.handleForgotPassword();
    }
  };

  handleForgotPassword = async () => {
    const {email} = this.state;
    const {navigation} = this.props;
    try {
      const response = await mutateForgot(email);
      this.setState({
        email: '',
        errorMessage: '',
      });
      navigation.navigate('Reset', {email: email});
    } catch (error) {
      alert(error);
    }
  };

  render() {
    const {DARK_ORANGE, LIGHT_ORANGE, YELLOW} = appStyles.color;
    const {email} = this.state;
    return (
      <View style={styles.container}>
        <LinearGradient
          style={styles.container}
          colors={[YELLOW, LIGHT_ORANGE, DARK_ORANGE]}>
          <HeaderComponent title={appStrings.FORGOT_PASS} />
          <View style={styles.inputContainer}>
            <Input
              fieldLabel={appStrings.EMAIL}
              textLabel={appStrings.FOR_ACCOUNT}
              onTextChange={this.handleInput}
              value={email}
              autoCompleteType={'email'}
            />
          </View>
          <RoundedButton title={appStrings.SEND} onPress={this.onPressSend} />
        </LinearGradient>
      </View>
    );
  }
}
