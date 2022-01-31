import { makeAutoObservable } from 'mobx';
import { BoilerStatus, Recipe } from '../types';
import { boilerMock, recipesMock } from './mock';

class Kitchen {
  recipes = recipesMock;
  boiler = boilerMock;
  status: BoilerStatus = 'empty';
  boilingTime = 0;

  constructor() {
    makeAutoObservable(this);
  }

  startCooking(recipe: Recipe) {
    this.boiler = recipe;
    this.status = 'cooking';
    this.boilingTime = recipe.result.cookingTime 
    // console.log(this.boiler);
  }

  decreaseBoilingTimer() {
    this.boilingTime -= 1; 
  }

  stopBoiling() {
    this.boilingTime = 0;
  }
}

export default new Kitchen();
