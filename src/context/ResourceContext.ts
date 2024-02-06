import {createContext, useContext} from "react";
import {ResourceObj} from "../types/app";
import {CategoryObj, defaultCategoryObj} from "../types/category";
import {defaultProfessionalObj, ProfessionalObj} from "../types/professional";
import {voidFn} from "../lib/utils";

type ResourceContextType = {
  displayedCategory: CategoryObj;
  selectedCategory: CategoryObj;
  displayedProfessional: ProfessionalObj;
  selectedProfessional: ProfessionalObj;
  displayedResource: any;
  selectedResource: any;

  setDisplayedCategory: Function;
  setSelectedCategory: Function;
  setDisplayedProfessional: Function;
  setSelectedProfessional: Function;
  setDisplayedResource: Function;
  setSelectedResource: Function;

  resources: ResourceObj[];
  professionals: ProfessionalObj[];
  categories: CategoryObj[]

  setResources: Function;
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
  displayedCategory: defaultCategoryObj,
  selectedCategory: defaultCategoryObj,
  displayedProfessional: defaultProfessionalObj,
  selectedProfessional: defaultProfessionalObj,
  displayedResource: {},
  selectedResource: {},

  setDisplayedCategory: voidFn,
  setSelectedCategory: voidFn,
  setDisplayedProfessional: voidFn,
  setSelectedProfessional: voidFn,
  setDisplayedResource: voidFn,
  setSelectedResource: voidFn,

  resources: [],
  professionals: [],
  categories: [],

  setResources: voidFn,
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
