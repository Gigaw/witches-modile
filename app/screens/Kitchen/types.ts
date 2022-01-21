export type IngredientType = {
  value: string | null;
  cookingTime: number;
};

export type IngredientPressType = (ingredient: IngredientType) => void;

export type IngredientsListType = Array<IngredientType>;

export type RecipeType = {
	name: string,
	ingredients: string[]
}

export type RecipesListType = Array<RecipeType>