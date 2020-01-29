import {StyleSheet} from 'react-native';
import appMetrics from '../../config/appMetrics';
import appStyles from '../../config/appStyles';

export default StyleSheet.create({
  container: {
    height: appMetrics.size_60,
    marginTop: appMetrics.size_20,
    marginBottom: appMetrics.size_10,
    justifyContent: 'center',
    alignSelf: 'center',
    width: '50%',
    alignItems: 'center',
    borderRadius: appMetrics.size_50,
  },
  buttonContainer: {},
  text: {
    fontSize: appMetrics.size_20,
    textAlign: 'center',
    color: 'white',
  },
});
