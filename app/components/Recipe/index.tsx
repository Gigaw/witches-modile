import React, {FC, Fragment} from 'react';
import {Text, View} from 'react-native';
import kitchen from '../../store/kitchen';
import {Recipe as RecipeType} from '../../types';
import AppButton from '../AppButton';
import {styles} from './styles';

interface PropTypes {
  data: RecipeType;
}

const Recipe: FC<PropTypes> = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        {data.ingredients.map((el, i, arr) => (
          <Fragment key={i}>
            <View style={styles.ingredient}>
              <Text style={styles.img}>{el.img}</Text>
            </View>
            <Text>{i + 1 === arr.length ? '=' : '+'}</Text>
          </Fragment>
        ))}
        <View style={styles.ingredient}>
          <Text style={styles.img}>{data.result.img}</Text>
        </View>
      </View>
      <View style={styles.timeContainer}>
        {/* <Text>Время: </Text> */}
        <Text style={styles.time}>Время: {data.result.cookingTime} с</Text>
        <AppButton text="Готовить" onPress={() => kitchen.startCooking(data)} isActive={true} />
      </View>
    </View>
  );
};

export default Recipe;
