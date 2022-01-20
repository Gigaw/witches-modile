import {IngredientsListType, IngredientType, RecipesListType} from './types';

export function isEqual<T>(arrA: T[], arrB: T[]): boolean {
  const a1 = arrA.sort();
  const a2 = arrB.sort();
  return a1.length == a2.length && a1.every((v, i) => v === a2[i]);
}

export const isBoilerField = (boiler: IngredientsListType): boolean => {
	let sum = 0;
	boiler.every(el => (sum += +!!el.value));
	return sum > 1;
  };  

export const getBoilerWithNewIngredient = (
  boiler: IngredientsListType,
  ingredient: IngredientType,
): IngredientsListType => {
  const newBoiler = [...boiler];
  newBoiler.every(el => {
    if (!el.value) {
      el.value = ingredient.value;
      return false;
    }
    return true;
  });
  return newBoiler;
};

export const getBoilerWithoutIngredient = (
  boiler: IngredientsListType,
  index: number,
): IngredientsListType => {
  const newBoiler = boiler.filter((el, i) => index !== i);
  newBoiler.push({
    value: null,
  });
  return newBoiler;
};

export const getBoilerResult = (boiler: IngredientsListType, recipes: RecipesListType): string => {
    const values = boiler.filter(el => el.value).map(el => el.value);
    const result = recipes.find(el => isEqual(el.ingredients, values));
    return result?.name || '?';
  };
