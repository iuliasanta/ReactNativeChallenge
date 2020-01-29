import {StyleSheet} from 'react-native';
import appMetrics from '../../config/appMetrics';
import appStyles from '../../config/appStyles';

export default StyleSheet.create({
  container: {
    paddingTop: appMetrics.size_50,
    paddingBottom: appMetrics.size_20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    color: appStyles.color.WHITE,
    fontSize: appMetrics.size_24,
  },
  arrowStyle: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 0.1,
  },
  titleStyle: {
    justifyContent: 'center',
  },
});
