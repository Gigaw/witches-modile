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
      const currArr = this.data[key]
      const curItemIndex = currArr.findIndex(el => el === item);
      const curItem = currArr[curItemIndex];

      if (curItem) {
        const a = curItem.count -= count;
        if (a === 0) {
          currArr.splice(curItemIndex, 1)
        }
        this.cash += item.price * count;
        return false;
      }
      return true;
    });
  }
}

export default new Stock();
