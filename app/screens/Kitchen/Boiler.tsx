import React, {FC, Fragment} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {boilerMock, recipes} from './mock';
import {IngredientsListType} from './types';
import {getBoilerResult, getCookingTime, getIsBoilerField} from './utils';
import kitchenStyles from './styles';

interface PropTypes {
  boiler: IngredientsListType;
  onItemPress: (index: number) => void;
}

const Boiler: FC<PropTypes> = ({boiler, onItemPress}) => {
  const cookingTime = getCookingTime(boiler);
  const isBoilerField = getIsBoilerField(boiler);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Котел</Text>
      </View>
      <View style={styles.list}>
        {boiler.map((el, i) => (
          <Fragment key={i}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => onItemPress(i)}>
              <Text>{el.value}</Text>
            </TouchableOpacity>
            <Text>{i + 1 === boilerMock.length ? '=' : '+'}</Text>
          </Fragment>
        ))}
        <View style={styles.item}>
          <Text>{isBoilerField ? getBoilerResult(boiler, recipes) : null}</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.time}>Время варки: {cookingTime}с </Text>
        <TouchableOpacity
          style={[styles.button, !isBoilerField && styles.bottonDisabled]}
          disabled={!isBoilerField}>
          <Text style={styles.buttonText}>Варить</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  item: {
    width: 50,
    height: 50,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  container: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  headerText: kitchenStyles.subTitle,
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time: {},
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    borderRadius: 5,
  },
  bottonDisabled: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  buttonText: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '800',
  },
});

export default Boiler;
