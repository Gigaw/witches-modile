import { IngredientsListType, IngredientType } from "./types";

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

export const calculateProgress = (total: number, current: number) => {
  return (total - current) / total;
};
