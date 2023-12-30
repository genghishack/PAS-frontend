import {createContext, useContext} from "react";
import {defaultSessionObj, defaultUserObj, CategoryObj, ProfessionalObj, ResourceObj, SessionObj, UserObj} from "../types/App";

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
