import {StyleSheet} from 'react-native';
import appMetrics from '../../config/appMetrics';
import appStyles from '../../config/appStyles';

export default StyleSheet.create({
  container: {
    flex: appMetrics.size_1,
    justifyContent: 'flex-start',
    backgroundColor: appStyles.color.LIGHT_ORANGE,
  },
  content: {
    marginTop: appMetrics.size_30,
    marginBottom: appMetrics.size_20,
    marginHorizontal: appMetrics.size_30,
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
    fontWeight: 'bold',
    marginHorizontal: appMetrics.size_7,
  },
  titleStyle: {
    color: appStyles.color.WHITE,
    fontSize: appMetrics.size_18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: appMetrics.size_1,
  },
  scrollViewContentContainer: {
    flexGrow: appMetrics.size_1,
  },
  inputContainer: {
    justifyContent: 'center',
  },

  bottomContainer: {
    flexDirection: 'row',
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
    fontSize: appMetrics.size_14,
  },
});
