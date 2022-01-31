import { Recipe, RecipesListType } from '../../types';

export const boilerMock: Recipe =
{
  id: 0,
  ingredients: [
    {
      id: 0,
      img: '',
      name: '',
      count: 0,
      price: 0,
      category: 'ingredients',
    },
    {
      id: 0,
      category: 'ingredients',
      img: '',
      name: '',
      count: 0,
      price: 0
    },
    {
      id: 0,
      category: 'ingredients',
      img: '',
      name: '',
      count: 0,
      price: 0
    },
  ],
  result: {
    id: 0,
    category: 'dishes',
    img: '',
    name: '',
    count: 0,
    price: 0,
    cookingTime: 0
  }
}



export const recipes: RecipesListType = [
  {
    name: 'Яичница ',
    img: '🍳',
    ingredients: [51, 14, 89],
  },
  {
    name: 'Сок яблочный',
    img: '🧃',
    ingredients: [14, 14],
  },
  {
    name: 'Томатный сок',
    img: '🥫',
    ingredients: [55, 55, 55],
  },
];