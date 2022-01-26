export type ThingType = {
	name: string;
	count: number;
	img: string;
	id: number;
	price: number;
};

export type ThingListType = Array<ThingType>;

export type ThingsMockType<T> = {
	ingredients: T;
	poisons: T;
	clothes: T;
	other: T;
};


export type StockMockType = ThingsMockType<ThingListType>
export type ThingsMockKeysType = keyof StockMockType;
export const getKeys = Object.keys as <T extends object>(obj: T) => Array<keyof T>