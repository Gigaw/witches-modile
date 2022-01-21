import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface PropTypes {
  emoji: string;
  isActive: boolean;
}
const TabIcon: FC<PropTypes> = ({emoji, isActive}) => {
  return (
    <View style={[styles.container, isActive && styles.containerActive]}>
      <Text style={styles.text}>{emoji}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: 50,
    // height: 50,
    // alignItems: 'center',
    // borderRadius: 50,
    // justifyContent: 'center',
  },
  containerActive: {
    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  text: {
    fontSize: 30,
  },
});

export default TabIcon;
