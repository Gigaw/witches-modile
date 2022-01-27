import React, {FC, useState} from 'react';
import {SafeAreaView, View} from 'react-native';
// import Header from '../../components/Header';
import Boiler from './Boiler';
import Ingredients from './Ingredients';
import {boilerMock} from './mock';
import styles from './styles';
import {IngredientPressType} from '../../types';

import {getBoilerWithNewIngredient, getBoilerWithoutIngredient} from './utils';

const Kitchen: FC = () => {
  const [boiler, setBoiler] = useState(boilerMock);

  const handleIngredientPress: IngredientPressType = ingredient => {
    setBoiler(getBoilerWithNewIngredient(boiler, ingredient));
  };

  const handleBoilerItemPress = (index: number): void => {
    setBoiler(getBoilerWithoutIngredient(boiler, index));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* <Header title="Кухня" /> */}
        <Boiler boiler={boiler} onItemPress={handleBoilerItemPress} />
        <Ingredients onItemPress={handleIngredientPress} />
      </View>
    </SafeAreaView>
  );
};

export default Kitchen;
