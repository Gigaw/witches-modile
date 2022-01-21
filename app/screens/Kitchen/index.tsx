import React, {FC, Fragment, useState} from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../../components/Header';
import Boiler from './Boiler';
import Ingredients from './Ingredients';
import {boilerMock} from './mock';
import styles from './styles';
import {IngredientPressType} from './types';
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
      <Header title="Кухня" />
      <Boiler boiler={boiler} onItemPress={handleBoilerItemPress} />
      <Ingredients onItemPress={handleIngredientPress} />
    </SafeAreaView>
  );
};

export default Kitchen;
