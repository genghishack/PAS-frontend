export type UserObj = {
  id?: string;
  email: string;
  name: string;
  roles: string[];
};

export const defaultUserObj: UserObj = {
  id: undefined,
  email: '',
  name: '',
  roles: [],
}

export type ResourceObj = any;
