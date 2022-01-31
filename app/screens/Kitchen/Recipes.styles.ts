import kitchenStyles from './styles';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 0,
    flexGrow: 1,
  },
  listContainer: {
    paddingVertical: 20,
  },
  header: kitchenStyles.subTitleContainer,
  headerText: kitchenStyles.subTitle,
  list: {
    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export default styles;
