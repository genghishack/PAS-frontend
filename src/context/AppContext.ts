import {createContext, useContext} from "react";
import {ResourceObj} from "../types/app";
import {CategoryObj} from "../types/category";
import {ProfessionalObj} from "../types/professional";
import {defaultUserObj, UserObj} from "../types/user";
import {defaultSessionObj, SessionObj} from "../types/api";

type AppContextType = {
  isAuthenticated: boolean;
  isEditor: boolean;
  isAdmin: boolean;
  accessToken: string;
  currentUser: UserObj;
  setIsAuthenticated: Function;
  setCurrentUser: Function;
}

export const AppContext = createContext<AppContextType>({
  isAuthenticated: false,
  isEditor: false,
  isAdmin: false,
  accessToken: '',
  currentUser: defaultUserObj,
  setIsAuthenticated: () => {},
  setCurrentUser: () => {},
})
AppContext.displayName = "AppContext";

export const useAppContext = () => useContext(AppContext);
