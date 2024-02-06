export type CategoryAttributes = {
  id?: number;
  nameSlug?: string;
  relationships?: {};
  nameDisplay: string;
}
export const defaultCategoryAttributes: CategoryAttributes = {
  nameDisplay: '',
}
export type CategoryObj = {
  type: string;
  id: string;
  attributes: CategoryAttributes;
}
export const defaultCategoryObj = {
  type: 'category',
  id: '',
  attributes: defaultCategoryAttributes
}

export interface ICategoryObj {
  attributes: CategoryAttributes;
}
