import React, {FC, Fragment, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {recipes} from './mock';
import {
  calculateProgress,
  getBoilerResult,
  getCookingTime,
  getIsBoilerField,
} from './utils';
import * as Progress from 'react-native-progress';
import AppButton from '../../components/AppButton';
import styles from './Boiler.styles';
import {IngredientsListType} from '../../types';

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

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <View style={styles.result}>
          <Text style={styles.resultImg}>{isBoilerField ? getBoilerResult(boiler, recipes) : null}</Text>
          {/* <Text style={styles.resultImg}>🧛🏻</Text> */}
        </View>
      </View>

      <View style={styles.list}>
        {boiler.map((el, i, arr) => (
          <Fragment key={i}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => onItemPress(i)}>
              <Text style={styles.itemImg}>{el.img}</Text>
            </TouchableOpacity>
            {i + 1 === arr.length ? null : <Text>+</Text>}
          </Fragment>
        ))}
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
            <AppButton
              text="стоп"
              onPress={() => setBoilingTime(0)}
              isActive={true}
            />
          </>
        )}
      </View>
    </View>
  );
};

export default Boiler;
