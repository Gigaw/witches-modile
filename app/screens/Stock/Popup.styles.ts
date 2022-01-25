import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    marginBottom: 20,
  },
  content: {
    width: '80%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    borderRadius: 10,
  },
  img: {
    fontSize: 60,
    textAlign: 'center',
    marginBottom: 10,
  },
  saleControl: {
    backgroundColor: 'white',
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  saleControlDisable: {
    backgroundColor: 'gray',
  },
  saleControlText: {
    fontSize: 15,
    fontWeight: '800',
  },
  saleRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
	width: 100,
	padding: 5,
	backgroundColor: 'rgba(255, 255, 255, 0.5)',
	borderRadius: 5,
  },
  sale: {
	flexDirection: 'row',
	justifyContent: 'space-between',
	alignItems: 'center',
  },
  saleNumber: {
	fontWeight: '600',

  },
  saleBtn: {
	  backgroundColor: 'white',
	  paddingHorizontal: 10,
	  borderRadius: 5,
	  paddingVertical: 5,
  },
  saleBtnText: {
	  fontSize: 15,
	  fontWeight: '600',
  },
  saleSum: {
	  fontSize: 20,
	  fontWeight: '500',
	  color: 'white',
  }

});
