export type ThingType = {
	name: string;
	count: number;
	img: string;
	id: number;
  };
  
  export type ThingListType = Array<ThingType>;
  
  export type ThingsMockType<T> = {
	ingredients: T;
	poisons: T;
	clothes: T;
	other: T;
  };
  
  export type StockMockType = ThingsMockType<ThingListType>