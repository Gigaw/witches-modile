import {makeAutoObservable} from 'mobx';
import { stockMock } from './mock';

class Stock {
  data = stockMock;

  constructor() {
    makeAutoObservable(this);
  }
}

export default new Stock();
