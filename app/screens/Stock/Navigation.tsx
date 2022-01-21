import React, {FC, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationItemType, NavigationListType} from './types';

interface PropTypes {
  data: NavigationListType;
}

interface ItemPropTypes {
  data: NavigationItemType;
  isActive: boolean;
  onPress: () => void;
}

const Item: FC<ItemPropTypes> = ({data, isActive, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.item, isActive && styles.itemActive]}
      onPress={onPress}>
      <Text style={styles.itemText}>{data.name}</Text>
    </TouchableOpacity>
  );
};

const Navigation: FC<PropTypes> = ({data}) => {
  const [curItem, setCurItem] = useState(0);
  return (
    <View style={styles.container}>
      {data.map((el, i) => (
        <Item
          key={i}
          data={el}
          isActive={curItem === i}
          onPress={() => setCurItem(i)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  item: {
    marginRight: 5,
    marginBottom: 5,
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 5,
  },
  itemActive: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    color: 'white',
  },
  itemText: {},
});
export default Navigation;
