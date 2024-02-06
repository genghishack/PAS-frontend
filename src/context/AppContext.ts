import {createContext, useContext} from "react";
import {defaultUserObj, UserObj} from "../types/user";
import {voidFn} from "../lib/utils";

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
  setIsAuthenticated: voidFn,
  setCurrentUser: voidFn,
})
AppContext.displayName = "AppContext";

export const useAppContext = () => useContext(AppContext);
