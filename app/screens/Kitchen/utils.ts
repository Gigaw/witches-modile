import {IngredientsListType, IngredientType, RecipesListType} from '../../types';

export function isEqual<T>(arrA: T[], arrB: T[]): boolean {
  const a1 = arrA.sort();
  const a2 = arrB.sort();
  return a1.length == a2.length && a1.every((v, i) => v === a2[i]);
}

export const getIsBoilerField = (boiler: IngredientsListType): boolean => {
  let sum = 0;
  boiler.every(el => (sum += +!!el.id));
  return sum > 1;
};

export const getBoilerWithNewIngredient = (
  boiler: IngredientsListType,
  ingredient: IngredientType,
): IngredientsListType => {
  const newBoiler = [...boiler];
  newBoiler.every((el, i, arr) => {
    if (!el.id) {
      arr[i] = ingredient;
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
    id: 0,
    cookingTime: 0,
    name: '',
    count: 0,
    img: '',
    price: 0,
  });
  return newBoiler;
};

export const getBoilerResult = (
  boiler: IngredientsListType,
  recipes: RecipesListType,
): string => {
  const values = boiler.filter(el => el.id).map(el => el.id);
  const result = recipes.find(el => isEqual(el.ingredients, values));
  return result?.img || '?';
};

export const getCookingTime = (boiler: IngredientsListType): number => {
  return (
    boiler.map(el => el.cookingTime).reduce((prev, cur) => prev + cur) / 1000
  );
};

export const calculateProgress = (total: number, current: number) => {
  return (total - current) / total;
};
