import { makeAutoObservable } from 'mobx';
import { getKeys, ThingType, StockMockType } from '../types';
import { stockMock } from './mock';

class Stock {
  data: StockMockType = stockMock;

  constructor() {
    makeAutoObservable(this);
  }

  saleThing(count: number, item: ThingType) {
    getKeys(this.data).every(key => {
      const curItem = this.data[key].find(el => el === item)
      if (curItem) {
        curItem.count -= count
        console.log(curItem);
        return false
      }
    })
  }
}

export default new Stock();
