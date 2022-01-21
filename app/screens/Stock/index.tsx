import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Navigation from './Navigation';
import {navMock} from './mock';

const Stock: FC = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Navigation data={navMock} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  navigation: {
    flexDirection: 'row',
  },
  navigationItem: {
    marginRight: 5,
  },
  navigationItemContaienr: {},
});

export default Stock;
