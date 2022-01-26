import React, {FC, useState} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {ThingType} from '../../types';
import {styles} from './Popup.styles';
import stock from '../../store/stock';

interface PropTypes {
  data: ThingType;
  closePopup: () => void;
}

const Popup: FC<PropTypes> = ({data, closePopup}) => {
  const [count, setCount] = useState(1);
  const handleSalePress = () => {
    stock.saleThing(count, data);
    closePopup();
  };
  return (
    <TouchableWithoutFeedback onPress={() => closePopup()}>
      <View style={styles.container}>
        <TouchableWithoutFeedback>
          <View style={styles.content}>
            <Text style={styles.img}>{data.img}</Text>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.text} numberOfLines={5}>
              Адсорбция, несмотря на внешние воздействия, эффективно сублимирует
              инициированный белок. Катод кристалично титрует окисленный
              электролиз. Электроотрицательность, в согласии с традиционным
            </Text>
            <View style={styles.sale}>
              <View style={styles.saleRow}>
                <TouchableOpacity
                  style={[
                    styles.saleControl,
                    count <= 1 && styles.saleControlDisable,
                  ]}
                  onPress={() => setCount(prev => --prev)}
                  disabled={count <= 1}>
                  <Text style={styles.saleControlText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.saleNumber}>{count}</Text>
                <TouchableOpacity
                  style={[
                    styles.saleControl,
                    count === data.count && styles.saleControlDisable,
                  ]}
                  onPress={() => setCount(prev => ++prev)}
                  disabled={count === data.count}>
                  <Text style={styles.saleControlText}>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.saleSum}>{count * data.price} $</Text>
              <TouchableOpacity
                style={styles.saleBtn}
                onPress={() => handleSalePress()}>
                <Text style={styles.saleBtnText}>Продать</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Popup;
