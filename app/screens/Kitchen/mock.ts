import { IngredientsListType, RecipesListType } from "./types";

export const boilerMock: IngredientsListType = [
  {
    value: '',
  },
  {
    value: '',
  },
  {
    value: '',
  },
];

export const recipes: RecipesListType = [
  {
    name: '⭐️',
    ingredients: ['a', 'b'],
  },
  {
    name: '☠️',
    ingredients: ['c', 'b'],
  },
  {
    name: '👽',
    ingredients: ['c', 'b', 'a'],
  },
  {
    name: '🔱',
    ingredients: ['c', 'b', 'f'],
  },
];

export const ingredients: IngredientsListType = [
  {
    value: 'a',
	cookingTime: 3000
  },
  {
    value: 'b',
	cookingTime: 3000
  },
  {
    value: 'c',
	cookingTime: 1000
  },
  {
    value: 'f',
	cookingTime: 3000
  },
  {
    value: 'g',
	cookingTime: 2000
  },
  {
    value: 'h',
	cookingTime: 7000
  },
];
