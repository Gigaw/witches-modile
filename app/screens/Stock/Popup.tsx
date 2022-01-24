import React, {FC, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ThingType} from '../../types';
import {styles} from './Popup.styles';

interface PropTypes {
  data: ThingType;
}

const Popup: FC<PropTypes> = ({data}) => {
  const [count, setCount] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.img}>{data.img}</Text>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.text} numberOfLines={5}>
          Адсорбция, несмотря на внешние воздействия, эффективно сублимирует
          инициированный белок. Катод кристалично титрует окисленный электролиз.
          Электроотрицательность, в согласии с традиционным
        </Text>
        <View style={styles.sale}>
          <View style={styles.saleRow}>
            <TouchableOpacity style={styles.saleControl} onPress={() => setCount(prev => --prev)}>
              <Text style={styles.saleControlText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.saleNumber}>{count}</Text>
            <TouchableOpacity style={styles.saleControl} onPress={() => setCount(prev => ++prev)}>
              <Text style={styles.saleControlText}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.saleSum}>{count * 1} $</Text>
          <TouchableOpacity style={styles.saleBtn}>
            <Text style={styles.saleBtnText}>Продать</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Popup;
