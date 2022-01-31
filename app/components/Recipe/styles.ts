import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 25,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)'
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between'
  },
  ingredient: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    fontSize: 30,
  },
  time: {
    // width: 40,
    marginRight: 'auto'
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
})