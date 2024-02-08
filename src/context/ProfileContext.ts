import {ChangeEventHandler, createContext, useContext} from "react";
import {voidFn} from "../lib/utils";

export const ProfileContext = createContext<{
  isLoading: boolean;
  setIsLoading: Function;
  fields: any;
  handleFieldChange: ChangeEventHandler;
  profilePhaseTransition: Function;
}>({
  isLoading: false,
  setIsLoading: voidFn,
  fields: [],
  handleFieldChange: voidFn,
  profilePhaseTransition: voidFn,
});
ProfileContext.displayName = 'ProfileContext';

export const useProfileContext = () => useContext(ProfileContext);
