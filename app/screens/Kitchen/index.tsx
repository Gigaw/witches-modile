import React, {FC, Fragment, useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../components/Header';
import Boiler from './Boiler';
import Ingredients from './Ingredients';
import {boilerMock, recipes} from './mock';
import {styles} from './styles';
import { IngredientPressType } from './types';
import {
  getBoilerResult,
  getBoilerWithNewIngredient,
  getBoilerWithoutIngredient,
  isBoilerField,
} from './utils';

const Kitchen: FC = () => {
  const [boiler, setBoiler] = useState(boilerMock);

  const handleIngredientPress: IngredientPressType = ingredient => {
    setBoiler(getBoilerWithNewIngredient(boiler, ingredient));
  };

  const handleBoilerItemPress = (index: number): void => {
    
  } 

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header title="Кухня" />
      <Boiler boiler={boiler} onItemPress={handleBoilerItemPress}/>
      {/* <View>
        <View>
          <Text>Котел</Text>
        </View>
        <View style={styles.boilerList}>
          {boiler.map((el, i) => (
            <Fragment key={i}>
              <TouchableOpacity
                style={styles.boilerItem}
                onPress={() =>
                  setBoiler(getBoilerWithoutIngredient(boiler, i))
                }>
                <Text>{el.value}</Text>
              </TouchableOpacity>
              <Text>{i + 1 === boilerMock.length ? '=' : '+'}</Text>
            </Fragment>
          ))}
          <View style={styles.boilerItem}>
            <Text>
              {isBoilerField(boiler) ? getBoilerResult(boiler, recipes) : null}
            </Text>
          </View>
        </View>
      </View> */}
      <Ingredients onItemPress={handleIngredientPress} />
    </SafeAreaView>
  );
};

export default Kitchen;
