import {NavigationListType} from './types';

export const navMock: NavigationListType = [
  {name: 'Ингредиенты', value: 'ingredients'},
  {name: 'Зелья', value: 'poisons'},
  {name: 'Одежда', value: 'clouses'},
  {name: 'Другое', value: 'other'},
];

export const stockMock = {
	ingredients: [
		{
			id: 1, 
			value: 'a',
			count: 2,
		}
	],
	poisons: [
		{

		}
	]
};
