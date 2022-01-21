import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    paddingTop: 20
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'left',
  },
  subTitleContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 5,
  }
});

export default styles;
