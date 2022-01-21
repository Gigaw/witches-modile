import React, {FC} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './Ingredients.styles';
import {ingredients} from './mock';
import {IngredientPressType} from './types';

interface PropTypes {
  onItemPress: IngredientPressType;
}

const Ingredients: FC<PropTypes> = ({onItemPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Ингредиенты</Text>
      </View>
      <FlatList
        data={ingredients}
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        renderItem={({item}) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity
              style={styles.item}
              onPress={() => onItemPress(item)}>
              <Text>{item.value}</Text>
            </TouchableOpacity>
          </View>
        )}
        numColumns={4}
      />
    </View>
  );
};

export default Ingredients;
