import React, {FC} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Item from './Item';
import {ThingListType} from '../../types';
import {styles} from './styles';
interface PropTypes {
  data: ThingListType;
}

const ThingsList: FC<PropTypes> = ({data}) => {
  return (
    <FlatList
      data={data}
      style={styles.block}
      contentContainerStyle={styles.container}
      renderItem={({item}) => <Item data={item}/>}
      numColumns={4}
    />
  );
};

export default ThingsList;
