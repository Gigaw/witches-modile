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
			cookingTime: 10000,
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
			cookingTime: 14000,
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
			cookingTime: 9000,
			count: 1,
			category: 'dishes',
			price: 14,
			name: 'Сок яблочный',
			img: '🧃',
		}
	}
];