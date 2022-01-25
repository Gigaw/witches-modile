import React, {FC, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Navigation from './Navigation';
import {navMock, stockMock} from './mock';
import ThingsList from '../../components/ThingsList';
import {styles} from './styles';
import stock from '../../store/stock';
import Popup from './Popup';
import {ThingType} from '../../types';

const Stock: FC = () => {
  const [curStock, setCurStock] = useState(0);
  const handleNavPress = (number: number) => {
    setCurStock(number);
  };
  const [activeItem, setActiveItem] = useState<ThingType| null>(null);
  const handleItemPress = (data: ThingType) => {
    setActiveItem(data);
  };
  

  const filter = navMock[curStock]?.value;
  const curStockData = stock.data[filter];
  return (
    <>
      <SafeAreaView style={{flexGrow: 1}}>
        <View style={styles.container}>
          <Navigation
            data={navMock}
            onItemPress={handleNavPress}
            activeItemIndex={curStock}
          />
          <ThingsList
            data={curStockData.slice()} // slice нужен чтобы убрать ворнинг mobx
            onItemPress={handleItemPress}
          />
        </View>
      </SafeAreaView>
      {activeItem && <Popup data={activeItem} closePopup={() => setActiveItem(null)} />}
    </>
  );
};

export default Stock;
