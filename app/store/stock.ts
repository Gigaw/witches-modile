import {makeAutoObservable} from 'mobx';
import {getKeys, ThingType, StockMockType} from '../types';
import {stockMock} from './mock';

class Stock {
  data: StockMockType = stockMock;
  cash = 0;

  constructor() {
    makeAutoObservable(this);
  }

  saleThing(count: number, item: ThingType) {
    getKeys(this.data).every(key => {
      const curItem = this.data[key].find(el => el === item);
      if (curItem) {
        const a = curItem.count -= count;
        console.log(a);
        if (a)
        this.cash += item.price * count;

        return false;
      }
      return true;
    });
  }
}

export default new Stock();
