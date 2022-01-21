import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface PropTypes {
  title: string;
}

const Header: FC<PropTypes> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'left',
  },
});

export default Header;
