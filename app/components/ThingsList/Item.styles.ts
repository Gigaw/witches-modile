import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '25%',
    alignItems: 'center',
  },
  block: {
    width: 70,
    height: 70,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderRadius: 5,
  },
  img: {
    fontSize: 40,
  },
  count: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    paddingHorizontal: 10,
    paddingVertical: 0,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  countText: {

  },
  info: {
	  position: 'absolute',
	//   top: 70,
	  left: 180,
	  zIndex: 10,
	  backgroundColor: 'rgba(0, 0, 0, 1)',
  },
  name: {
	  color: 'white'
  },
  text: {
	  color: 'white'
  }
});
