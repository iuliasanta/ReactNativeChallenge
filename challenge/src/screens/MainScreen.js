import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles/MainScreenStyle';
import LinearGradient from 'react-native-linear-gradient';
import appStrings from '../config/appStrings';
import RoundedButton from '../components/RoundedButton';
import appStyles from '../config/appStyles';
import SimpleHeaderComponent from '../components/SimpleHeaderComponent';

export default class MainScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    const {params = {}} = navigation.state;
    return {
      header: null,
    };
  };
  constructor(props) {
    super(props);
  }

  onPressLogout = () => {
    this.props.navigation.navigate('Forgot');
  };

  render() {
    const {DARK_ORANGE, LIGHT_ORANGE, YELLOW} = appStyles.color;
    const {data} = this.props.navigation.state.params;
    const {user} = data.data.resetPassword;
    return (
      <View style={styles.container}>
        <LinearGradient
          style={styles.container}
          colors={[YELLOW, LIGHT_ORANGE, DARK_ORANGE]}>
          <SimpleHeaderComponent title={appStrings.MAIN_SCREEN} />
          <View style={styles.content}>
            <Text style={styles.titleStyle}>{user.name}</Text>
          </View>

          <RoundedButton
            title={appStrings.LOGOUT}
            onPress={this.onPressLogout}
          />
        </LinearGradient>
      </View>
    );
  }
}
