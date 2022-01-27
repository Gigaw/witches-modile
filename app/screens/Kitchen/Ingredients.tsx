import React, {FC} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import stock from '../../store/stock';
import styles from './Ingredients.styles';
import { IngredientPressType } from "../../types";
interface PropTypes {
  onItemPress: IngredientPressType;
}

const Ingredients: FC<PropTypes> = ({onItemPress}) => {
  const ingredients = stock.data['ingredients'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Ингредиенты</Text>
      </View>
      <FlatList
        data={ingredients.slice()}
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => onItemPress(item)}>
              <Text>{item.img}</Text>
            </TouchableOpacity>
          </View>
        )}
        numColumns={4}
      />
    </View>
  );
};

export default Ingredients;
