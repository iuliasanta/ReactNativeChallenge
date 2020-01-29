import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import ForgotPassScreen from '../screens/ForgotPassScreen';
import ResetPassScreen from '../screens/ResetPassScreen';
import appStyles from '../config/appStyles';
import MainScreen from '../screens/MainScreen';

const MainNavigator = createStackNavigator(
  {
    Forgot: ForgotPassScreen,
    Reset: ResetPassScreen,
    Main: MainScreen,
  },
  {
    initialRouteName: 'Forgot',
  },
);

export default createAppContainer(MainNavigator);
