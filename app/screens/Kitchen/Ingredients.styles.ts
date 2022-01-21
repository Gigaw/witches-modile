import kitchenStyles from './styles';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 0,
    flexGrow: 1,
  },
  listContainer: {
    paddingVertical: 20,
  },
  header: {},
  headerText: kitchenStyles.subTitle,
  list: {
    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  item: {
    width: 70,
    height: 70,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderRadius: 5,
  },
  itemContainer: {
    width: '25%',
    justifyContent: 'center',
  },
});

export default styles;
