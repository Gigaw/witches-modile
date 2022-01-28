export interface ThingType {
  name: string;
  count: number;
  img: string;
  id: number;
  price: number;
}

export type ThingListType = Array<ThingType>;

export interface IngredientType extends ThingType {
  cookingTime: number;
}

export type IngredientPressType = (ingredient: IngredientType) => void;
export type IngredientsListType = Array<IngredientType>;

export interface StockMockType {
  ingredients: IngredientsListType;
  poisons: ThingListType;
  clothes: ThingListType;
  other: ThingListType;
}

// export type StockMockType = ThingsMockType<ThingListType>;
export type ThingsMockKeysType = keyof StockMockType;
export const getKeys = Object.keys as <T extends object>(
  obj: T,
) => Array<keyof T>;

export type RecipeType = {
  name: string;
  img: string;
  ingredients: number[];
};

export type RecipesListType = Array<RecipeType>;
