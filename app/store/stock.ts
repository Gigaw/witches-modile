import { makeAutoObservable } from 'mobx';
import { ThingType } from '../types';
import { recipesMock, stockMock } from './mock';

class Stock {
  data = stockMock;
  cash = 0;
  recipes = recipesMock;

  constructor() {
    makeAutoObservable(this);
  }

  saleThing(count: number, item: ThingType) {
    this.data.forEach((el, i, arr) => {
      if (el === item) {
        const remainder = el.count -= count;
        if (remainder === 0) {
          arr.splice(i, 1)
        }
        this.cash += item.price * count;
      }
    })
  }

  // cookRecipe(boiler, recipe) {

  // }
}

export default new Stock();
