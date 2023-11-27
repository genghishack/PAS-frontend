export type UserObj = {
  id?: string;
  email: string;
  name: string;
  roles: string[];
  isAdmin: boolean;
  isEditor: boolean;
  isUser: boolean;
  isGuest: boolean;
};

export const defaultUserObj: UserObj = {
  id: undefined,
  email: '',
  name: '',
  roles: [],
  isAdmin: false,
  isEditor: false,
  isUser: false,
  isGuest: true,
}

export type ResourceObj = any;

type ResponseDataObj = {
  type: string;
  id: string;
  attributes: any;
}
export type ResponseObj = {
  links?: {
    self: string;
  },
  data: any[];
}
export const defaultResponseObj: ResponseObj = {
  data: []
}

type CategoryAttributes = {
  id?: number;
  nameSlug?: string;
  nameDisplay: string;
}
const defaultCategoryAttributes = {
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

type ProfessionalAttributes = {
  nameLast: string;
  nameFirst: string;
  namePrefix: string;
  nameSuffix: string;
  addressCity: string;
  addressState: string;
  addressCountry: string;
  organization: string;
  categories: CategoryAttributes[];
}
const defaultProfessionalAttributes = {
  "nameLast": '',
  "nameFirst": '',
  "namePrefix": '',
  "nameSuffix": '',
  "addressCity": '',
  "addressState": '',
  "addressCountry": '',
  organization: '',
  categories: [defaultCategoryAttributes]
}
export type ProfessionalObj = {
  type: string;
  id: string;
  attributes: ProfessionalAttributes;
}
export const defaultProfessionalObj = {
  type: 'professional',
  id: '',
  attributes: defaultProfessionalAttributes
}
export interface IProfessionalObj {
  attributes: ProfessionalAttributes;
}

export type SessionObj = {
  accessToken: string;
}

export const defaultSessionObj: SessionObj = {
  accessToken: '',
}
