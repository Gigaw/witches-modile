import React, {FC, Fragment, useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import Header from '../../components/Header';
import Ingredients from './Ingredients';
import {boilerMock, IngredientPressType, isBoilerField, recipes} from './mock';
import {styles} from './styles';
import { IngredientsListType } from './types';

interface PropTypes {
	boiler: IngredientsListType,
	onItemPress: (index: number) => void
}

const Boiler: FC<PropTypes> = ({boiler, onItemPress}) => {
	return (
		<View>
        <View>
          <Text>Котел</Text>
        </View>
        <View style={styles.boilerList}>
          {boiler.map((el, i) => (
            <Fragment key={i}>
              <TouchableOpacity
                style={styles.boilerItem}
                onPress={() => onItemPress(i)}>
                <Text>{el.value}</Text>
              </TouchableOpacity>
              <Text>{i + 1 === boilerMock.length ? '=' : '+'}</Text>
            </Fragment>
          ))}
          <View style={styles.boilerItem}>
            <Text>{isBoilerField(boiler) ? getBoilerResult() : null}</Text>
          </View>
        </View>
      </View>
	)
}

export default Boiler;