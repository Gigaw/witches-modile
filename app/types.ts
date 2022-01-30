//Thing
export interface ThingType {
  name: string;
  count: number;
  img: string;
  id: number;
  price: number;
  category: ThingsCategories;
}

export type ThingListType = Array<ThingType>;

//Ingredient
export interface IngredientType extends ThingType {
  cookingTime: number;
}

export type IngredientPressType = (ingredient: IngredientType) => void;
export type IngredientsListType = Array<IngredientType>;

//Stock
export type StockMockType = Array<ThingType | IngredientType>

export type ThingsMockKeysType = keyof StockMockType;
export const getKeys = Object.keys as <T extends object>(
  obj: T,
) => Array<keyof T>;

//Recipe
export type RecipeType = {
  name: string;
  img: string;
  ingredients: number[];
};

export type RecipesListType = Array<RecipeType>;

//Navigation
export type NavigationItemType = {
  name: string;
  filterName: ThingsCategories;
};

export type NavigationListType = Array<NavigationItemType>;

export type ThingsCategories = 'dishes' | 'ingredients';

