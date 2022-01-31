import React, {FC, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
// import Header from '../../components/Header';
import Boiler from './Boiler';
import Recipes from './Recipes';
import styles from './styles';

const Kitchen: FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* <Header title="Кухня" /> */}
        <Boiler />
        <Recipes />
      </View>
    </SafeAreaView>
  );
};

export default Kitchen;
