import {StyleSheet} from 'react-native';
import kitchenStyles from './styles';

const styles = StyleSheet.create({
  list: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    // backgroundColor: 'red'
  },
  item: {
    width: 50,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  itemImg: {
    
  },
  result: {
    width: 100,
    height: 100,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  resultContainer: {
    alignItems: 'center',
    marginBottom: 15
  },
  resultImg: {
    fontSize: 80,
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
