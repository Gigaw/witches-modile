import {makeAutoObservable} from 'mobx';
import { ThingType } from '../types';
import { stockMock } from './mock';

class Stock {
  data = stockMock;

  constructor() {
    makeAutoObservable(this);
  }

  saleThing(count: number, item: ThingType) {
    // for (let key:  in this.data) {
    //   this.data[key]
    // }
  }
}

export default new Stock();
