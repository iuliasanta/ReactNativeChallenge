import {StyleSheet} from 'react-native';
import appMetrics from '../../config/appMetrics';
import appStyles from '../../config/appStyles';

export default StyleSheet.create({
  container: {
    flex: appMetrics.size_1,
    justifyContent: 'flex-start',
    backgroundColor: appStyles.color.LIGHT_ORANGE,
  },
  errorMessageContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: appMetrics.size_40,
    backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: appMetrics.size_1,
    borderRadius: appMetrics.size_5,
  },
  erorrMessage: {
    fontSize: appMetrics.size_20,
    color: appStyles.color.WHITE,
    marginHorizontal: appMetrics.size_5,
  },
  scrollView: {
    flex: appMetrics.size_1,
  },
  scrollViewContentContainer: {
    flexGrow: appMetrics.size_1,
  },
  inputContainer: {
    justifyContent: 'center',
    marginTop: appMetrics.size_130,
  },
  bottomContainer: {
    paddingRight: appMetrics.size_20,
    paddingLeft: appMetrics.size_20,
    marginBottom: appMetrics.size_30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  secondTermStyle: {
    textDecorationLine: 'underline',
    color: appStyles.color.WHITE,
  },
  termsStyle: {
    color: appStyles.color.WHITE,
  },
});
