import {createContext, useContext} from "react";
import {voidFn} from "../lib/utils";

type AdminContextType = {
  adminPhaseTransition: Function;
}

export const AdminContext = createContext<AdminContextType>({
  adminPhaseTransition: voidFn
});
AdminContext.displayName = "AdminContext";

export const useAdminContext = () => useContext(AdminContext);
