import React, {FC, Fragment, useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {boilerMock, recipes} from './mock';
import {IngredientsListType} from './types';
import {getBoilerResult, getCookingTime, getIsBoilerField} from './utils';
import kitchenStyles from './styles';
import * as Progress from 'react-native-progress';
import AppButton from '../../components/AppButton';

interface PropTypes {
  boiler: IngredientsListType;
  onItemPress: (index: number) => void;
}

const Boiler: FC<PropTypes> = ({boiler, onItemPress}) => {
  const [boilingTime, setBoilingTime] = useState(0); //поменять название не понятно чем отличается от cooking time
  const cookingTime = getCookingTime(boiler); //поменять название
  const isBoilerField = getIsBoilerField(boiler);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (boilingTime > 0) {
      timer = setTimeout(() => setBoilingTime(prev => prev - 1), 1000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [boilingTime]);

  const calculateProgress = (total: number, current: number) => {
    return (total - current) / total;
  };

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
        {!(boilingTime > 0) ? (
          <>
            <View style={styles.timeContainer}>
              <Text>Время варки: </Text>
              <Text style={styles.time}>{cookingTime}с</Text>
            </View>

            <AppButton
              text="Варить"
              onPress={() => setBoilingTime(cookingTime)}
              isActive={isBoilerField}
            />
          </>
        ) : (
          <>
            <Text style={styles.time}>{boilingTime}с</Text>
            <Progress.Bar
              progress={calculateProgress(cookingTime, boilingTime)}
              width={200}
              height={10}
              color="rgba(0, 0, 0, 1)"
            />
            <AppButton text="стоп" onPress={() => setBoilingTime(0)} isActive={true} />
          </>
        )}
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
  time: {
    // backgroundColor: 'red',
    width: 40,
  },
  timeContainer: {
    flexDirection: 'row',
  },
});

export default Boiler;
