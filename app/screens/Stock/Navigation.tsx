import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { NavigationListType } from '../../types';
import {styles} from './Navigation.styles';

interface PropTypes {
  data: NavigationListType;
  onItemPress: (number: number) => void;
  activeItemIndex: number
}

const Navigation: FC<PropTypes> = ({data, onItemPress, activeItemIndex}) => {
  return (
    <View style={styles.container}>
      {data.map((el, i) => (
        <TouchableOpacity
          style={[styles.item, activeItemIndex === i && styles.itemActive]}
          onPress={() => onItemPress(i)}
          key={i}>
          <Text style={styles.itemText}>{el.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Navigation;
