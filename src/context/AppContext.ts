import {createContext, useContext} from "react";
import {defaultUserObj, ResourceObj, UserObj} from "../types/App";

type AppContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: Function;
  isEditor: boolean;
  isAdmin: boolean;
  currentUser: UserObj;
  setCurrentUser: Function;
  resources: ResourceObj[];
  setResources: Function;
}

export const AppContext = createContext<AppContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  isEditor: false,
  isAdmin: false,
  currentUser: defaultUserObj,
  setCurrentUser: () => {},
  resources: [],
  setResources: () => {},
})
AppContext.displayName = "AppContext";

export const useAppContext = () => useContext(AppContext);
