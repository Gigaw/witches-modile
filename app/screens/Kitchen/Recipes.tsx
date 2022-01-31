import React, {FC} from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './Recipes.styles';
import Recipe from '../../components/Recipe';
import kitchen from '../../store/kitchen';
import {observer} from 'mobx-react-lite';
interface PropTypes {}

const Recipes: FC<PropTypes> = observer(({}) => {
  const recipes = kitchen.recipes;
  // console.log('render');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Рецепты</Text>
      </View>
      <FlatList
        data={recipes.slice()}
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        renderItem={({item}) => <Recipe data={item} />}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
});
export default Recipes;
