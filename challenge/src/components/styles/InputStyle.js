import {StyleSheet} from 'react-native';
import appMetrics from '../../config/appMetrics';
import appStyles from '../../config/appStyles';

export default StyleSheet.create({
  container: {
    height: appMetrics.size_70,
    marginBottom: appMetrics.size_30,
    marginHorizontal: appMetrics.size_30,
  },
  labelContainer: {
    flexDirection: 'row',
    marginBottom: appMetrics.size_10,
  },
  labelText: {
    paddingLeft: appMetrics.size_4,
    color: appStyles.color.WHITE,
    fontSize: appMetrics.size_18,
  },
  labelTextBold: {
    color: appStyles.color.WHITE,
    fontSize: appMetrics.size_18,
    fontWeight: 'bold',
  },
  inputContainer: {
    height: appMetrics.size_40,
    fontSize: appMetrics.size_17,
    borderWidth: appMetrics.size_1,
    borderRadius: appMetrics.size_5,
    borderColor: appStyles.color.WHITE,
    backgroundColor: appStyles.color.WHITE,
  },
});
