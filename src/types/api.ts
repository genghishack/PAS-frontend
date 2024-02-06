export type SessionObj = {
  accessToken: string;
}
export const defaultSessionObj: SessionObj = {
  accessToken: '',
}

export type ResponseObj = {
  data: DataObj[];
  included?: IncludedObj[];
  links?: LinksObj,
}
export const defaultResponseObj: ResponseObj = {
  data: []
}
export interface IResponseObj {
  data: DataObj[];
  included?: IncludedObj[];
}

type DataObj = {
  type: string;
  id: string;
  attributes: any;
  relationships?: any;
}

export type RelationshipObj = {
  id: string;
  type: string;
}

export type IncludedObj = {
  id: string;
  type: string;
  attributes: any[];
}

export type LinksObj = {
  self?: string;
}
