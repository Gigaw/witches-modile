import { Recipe, StockMockType } from "../types";

export const stockMock: StockMockType = [
	{
		id: 51,
		count: 2,
		name: 'egg',
		img: '🥚',
		price: 4,
		category: 'ingredients'
	},
	{
		id: 14,
		count: 1,
		name: 'salt',
		img: '🧂',
		price: 3,
		category: 'ingredients'
	},
	{
		id: 89,
		count: 7,
		name: 'butter',
		img: '🧈',
		price: 11,
		category: 'ingredients'
	},
	{
		id: 14,
		count: 10,
		name: 'apple',
		img: '🍏',
		price: 1,
		category: 'ingredients'
	},
	{
		id: 55,
		count: 10,
		name: 'tomato',
		img: '🍅',
		price: 15,
		category: 'ingredients'
	},
]

export const recipesMock: Array<Recipe> = [
	{
		id: 0,
		ingredients: [
			{
				id: 55,
				count: 10,
				name: 'tomato',
				img: '🍅',
				price: 15,
				category: 'ingredients'
			},
			{
				id: 55,
				count: 10,
				name: 'tomato',
				img: '🍅',
				price: 15,
				category: 'ingredients'
			},
			{
				id: 55,
				count: 10,
				name: 'tomato',
				img: '🍅',
				price: 15,
				category: 'ingredients'
			},
		],
		result: {
			id: 20,
			name: 'Томатный сок',
			img: '🥫',
			cookingTime: 24,
			count: 1,
			category: 'dishes',
			price: 16,
		}
	},
	{
		id: 2,
		ingredients: [
			{
				id: 51,
				count: 2,
				name: 'egg',
				img: '🥚',
				price: 4,
				category: 'ingredients'
			},
			{
				id: 14,
				count: 1,
				name: 'salt',
				img: '🧂',
				price: 3,
				category: 'ingredients'
			},
			{
				id: 89,
				count: 7,
				name: 'butter',
				img: '🧈',
				price: 11,
				category: 'ingredients'
			},
		],
		result: {
			id: 40,
			name: 'Яичница ',
			img: '🍳',
			cookingTime: 87,
			count: 1,
			category: 'dishes',
			price: 26,
		}
	},
	{
		id: 3,
		ingredients: [
			{
				id: 14,
				count: 10,
				name: 'apple',
				img: '🍏',
				price: 1,
				category: 'ingredients'
			},
			{
				id: 14,
				count: 10,
				name: 'apple',
				img: '🍏',
				price: 1,
				category: 'ingredients'
			},
		],
		result: {
			id: 30,
			cookingTime: 7,
			count: 1,
			category: 'dishes',
			price: 14,
			name: 'Сок яблочный',
			img: '🧃',
		}
	}
];

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
