import {ChangeEventHandler, createContext, useContext} from "react";
import {voidFn} from "../lib/utils";

type AuthContextType = {
  isLoading: boolean;
  setIsLoading: Function;
  fields: any;
  handleFieldChange: ChangeEventHandler;
  newUser: any;
  attemptSignin: Function;
  authPhaseTransition: Function;
}

export const AuthContext = createContext<AuthContextType>({
  isLoading: false,
  setIsLoading: voidFn,
  fields: [],
  handleFieldChange: voidFn,
  newUser: {},
  attemptSignin: voidFn,
  authPhaseTransition: voidFn,
});
AuthContext.displayName = "AuthContext";

export const useAuthContext = () => useContext(AuthContext);
