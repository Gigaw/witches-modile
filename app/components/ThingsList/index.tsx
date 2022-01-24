import React, {FC} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Item from './Item';
import {ThingListType, ThingType} from '../../types';
import {styles} from './styles';
interface PropTypes {
  data: ThingListType;
  onItemPress: (data: ThingType) => void
}

const ThingsList: FC<PropTypes> = ({data, onItemPress}) => {
  return (
    <FlatList
      data={data}
      style={styles.block}
      contentContainerStyle={styles.container}
      renderItem={({item}) => <Item data={item} onPress={() => onItemPress(item)}/>}
      numColumns={4}
    />
  );
};

export default ThingsList;
