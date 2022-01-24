export type NavigationItemType = {
  name: string;
  value: CurStockTypes;
};
export type NavigationListType = Array<NavigationItemType>;

export type CurStockTypes =
  | 'poisons'
  | 'ingredients'
  | 'clothes'
  | 'other';
