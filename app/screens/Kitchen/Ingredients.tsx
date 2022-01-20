import React, {FC} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ingredients} from './mock';
import { IngredientPressType } from './types';


interface PropTypes {
  onItemPress: IngredientPressType
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
            <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
              <Text>{item.value}</Text>
            </TouchableOpacity>
          </View>
        )}
        numColumns={4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 0,
    flexGrow: 1,
  },
  listContainer: {
    paddingVertical: 20,
  },
  header: {},
  headerText: {
    fontSize: 18,
    fontWeight: '500',
  },
  list: {
    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  item: {
    width: 70,
    height: 70,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    borderRadius: 5,
  },
  itemContainer: {
    width: '25%',
    justifyContent: 'center',
  },
});

export default Ingredients;
