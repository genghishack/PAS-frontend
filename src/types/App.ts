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

export type SessionObj = {
  accessToken: string;
}

export const defaultSessionObj: SessionObj = {
  accessToken: '',
}
