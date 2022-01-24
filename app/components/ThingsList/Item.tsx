import React, {FC, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ThingType} from '../../types';
import {styles} from './Item.styles';

interface PropTypes {
  data: ThingType;
  onPress: () => void
}

const Item: FC<PropTypes> = ({data, onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.block} onPress={onPress}>
        <Text style={styles.img}>{data.img}</Text>
        <View style={styles.count}>
          <Text style={styles.countText}>{data.count}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Item;
