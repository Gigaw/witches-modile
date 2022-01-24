import React, {FC, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Navigation from './Navigation';
import {navMock, stockMock} from './mock';
import ThingsList from '../../components/ThingsList';
import { styles } from './styles';
import stock from '../../store/stock';

const Stock: FC = () => {
  const [curStock, setCurStock] = useState(0);
  const handleNavPress = (number: number) => {
    setCurStock(number);
  };
  
  const filter = navMock[curStock]?.value;
  const curStockData = stock.data[filter];
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Navigation data={navMock} onItemPress={handleNavPress} activeItemIndex={curStock} />
        <ThingsList data={curStockData} />
      </View>
    </SafeAreaView>
  );
};

export default Stock;
