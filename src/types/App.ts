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

type ProfessionalAttributes = {
  "name_last": string;
  "name_first": string;
  "name_prefix": string;
  "name_suffix": string;
  "address_city": string;
  "address_state": string;
  "address_country": string;
  organization: string;
  categories: CategoryAttributes[];
}
const defaultProfessionalAttributes = {
  "name_last": '',
  "name_first": '',
  "name_prefix": '',
  "name_suffix": '',
  "address_city": '',
  "address_state": '',
  "address_country": '',
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

export type SessionObj = {
  accessToken: string;
}

export const defaultSessionObj: SessionObj = {
  accessToken: '',
}
