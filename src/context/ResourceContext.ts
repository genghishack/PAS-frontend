import {createContext, useContext} from "react";
import {CategoryObj, defaultCategoryObj} from "../types/category";
import {defaultProfessionalObj, ProfessionalObj} from "../types/professional";
import {voidFn} from "../lib/utils";

type ResourceContextType = {
  getProfessionalsForCategory: Function;

  displayedCategory: CategoryObj;
  selectedCategory: CategoryObj;
  displayedProfessional: ProfessionalObj;
  selectedProfessional: ProfessionalObj;

  setDisplayedCategory: Function;
  setSelectedCategory: Function;
  setDisplayedProfessional: Function;
  setSelectedProfessional: Function;

  professionals: ProfessionalObj[];
  categories: CategoryObj[]

  setProfessionals: Function;
  setCategories: Function;

  showDeleteResourceModal: boolean;
  showAddResourceModal: boolean;
  showEditResourceModal: boolean;
  showSubmitResourceModal: boolean;

  setShowDeleteResourceModal: Function;
  setShowAddResourceModal: Function;
  setShowEditResourceModal: Function;
  setShowSubmitResourceModal: Function;
}

export const ResourceContext = createContext<ResourceContextType>({
  getProfessionalsForCategory: voidFn,

  displayedCategory: defaultCategoryObj,
  selectedCategory: defaultCategoryObj,
  displayedProfessional: defaultProfessionalObj,
  selectedProfessional: defaultProfessionalObj,

  setDisplayedCategory: voidFn,
  setSelectedCategory: voidFn,
  setDisplayedProfessional: voidFn,
  setSelectedProfessional: voidFn,

  professionals: [],
  categories: [],

  setProfessionals: voidFn,
  setCategories: voidFn,

  showDeleteResourceModal: false,
  showAddResourceModal: false,
  showEditResourceModal: false,
  showSubmitResourceModal: false,

  setShowDeleteResourceModal: voidFn,
  setShowAddResourceModal: voidFn,
  setShowEditResourceModal: voidFn,
  setShowSubmitResourceModal: voidFn,
});
ResourceContext.displayName = 'ResourceContext';

export const useResourceContext = () => useContext(ResourceContext);
