import React, {FC, Fragment, useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {calculateProgress} from './utils';
import * as Progress from 'react-native-progress';
import AppButton from '../../components/AppButton';
import styles from './Boiler.styles';
import {Recipe} from '../../types';
import kitchen from '../../store/kitchen';
import {observer} from 'mobx-react-lite';

interface PropTypes {
  // boiler: Recipe;
  // onItemPress: (index: number) => void;
}

const Boiler: FC<PropTypes> = observer(() => {
  const boilingTime = kitchen.boilingTime;
  const cookingTime = kitchen.boiler.result.cookingTime; //поменять название

  console.log(boilingTime);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (boilingTime > 0) {
      timer = setTimeout(() => kitchen.decreaseBoilingTimer(), 1000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [boilingTime]);

  // const Footer = 

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <View style={styles.result}>
          <Text style={styles.resultImg}>
            {kitchen.boiler.result.img}
            {/* {isBoilerField ? getBoilerResult(boiler, recipes) : null} */}
          </Text>
          {/* <Text style={styles.resultImg}>🧛🏻</Text> */}
        </View>
      </View>

      <View style={styles.list}>
        {kitchen.boiler.ingredients.map((el, i, arr) => (
          <Fragment key={i}>
            <TouchableOpacity style={styles.item} onPress={() => null}>
              <Text style={styles.itemImg}>{el.img}</Text>
            </TouchableOpacity>
            {i + 1 === arr.length ? null : <Text>+</Text>}
          </Fragment>
        ))}
      </View>
      <View style={styles.footer}>
        {boilingTime > 0 && (
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
              onPress={() => kitchen.stopBoiling()}
              isActive={true}
            />
          </>
        )}
      </View>
    </View>
  );
});

export default Boiler;
