import {StyleSheet} from 'react-native';
import kitchenStyles from './styles';

const styles = StyleSheet.create({
  list: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  item: {
    width: 50,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  container: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  header: kitchenStyles.subTitleContainer,
  headerText: kitchenStyles.subTitle,
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {
    // backgroundColor: 'red',
    width: 40,
  },
  timeContainer: {
    flexDirection: 'row',
  },
});

export default styles;
