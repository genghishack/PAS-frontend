import {createContext, useContext} from "react";
import {defaultSessionObj, defaultUserObj, ResourceObj, SessionObj, UserObj} from "../types/App";

type AppContextType = {
  isAuthenticated: boolean;
  isEditor: boolean;
  isAdmin: boolean;
  accessToken: string;
  currentUser: UserObj;
  resources: ResourceObj[];
  setIsAuthenticated: Function;
  setCurrentUser: Function;
  setResources: Function;
}

export const AppContext = createContext<AppContextType>({
  isAuthenticated: false,
  isEditor: false,
  isAdmin: false,
  accessToken: '',
  currentUser: defaultUserObj,
  resources: [],
  setIsAuthenticated: () => {},
  setCurrentUser: () => {},
  setResources: () => {},
})
AppContext.displayName = "AppContext";

export const useAppContext = () => useContext(AppContext);
