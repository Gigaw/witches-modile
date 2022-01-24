import { StockMockType } from '../../types';
import {NavigationListType} from './types';

export const navMock: NavigationListType = [
  {name: 'Ингредиенты', value: 'ingredients'},
  {name: 'Пойло', value: 'poisons'},
  {name: 'Одежда', value: 'clothes'},
  {name: 'Другое', value: 'other'},
];

export const stockMock: StockMockType = {
  ingredients: [
    {
      id: 1,
      count: 2,
      name: 'carrot',
      img: '🥕',
    },
    {
      id: 7,
      count: 1,
      name: 'salt',
      img: '🧂',
    },
    {
      id: 8,
      count: 2,
      name: 'avocado',
      img: '🥑',
    },
  ],
  poisons: [
    {
      id: 2,
      count: 2,
      name: 'green poison',
      img: '🍵',
    },
    {
      id: 5,
      count: 2,
      name: 'black poison',
      img: '☕️',
    },
  ],
  clothes: [
    {
      id: 3,
      count: 2,
      name: 'hikaku',
      img: '👘',
    },
  ],

  other: [
    {
      id: 6,
      count: 2,
      name: 'car',
      img: '🚖',
    },
  ],
};
