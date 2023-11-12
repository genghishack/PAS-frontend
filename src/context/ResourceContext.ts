import {createContext, useContext} from "react";
import {CategoryObj, defaultCategoryObj, defaultProfessionalObj, ProfessionalObj, ResourceObj} from "../types/App";

type ResourceContextType = {
  getMapMarkers: Function;

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
  getMapMarkers: () => {},

  displayedCategory: defaultCategoryObj,
  selectedCategory: defaultCategoryObj,
  displayedProfessional: defaultProfessionalObj,
  selectedProfessional: defaultProfessionalObj,
  displayedResource: {},
  selectedResource: {},

  setDisplayedCategory: () => {},
  setSelectedCategory: () => {},
  setDisplayedProfessional: () => {},
  setSelectedProfessional: () => {},
  setDisplayedResource: () => {},
  setSelectedResource: () => {},

  resources: [],
  professionals: [],
  categories: [],

  setResources: () => {},
  setProfessionals: () => {},
  setCategories: () => {},

  showDeleteResourceModal: false,
  showAddResourceModal: false,
  showEditResourceModal: false,
  showSubmitResourceModal: false,

  setShowDeleteResourceModal: () => {},
  setShowAddResourceModal: () => {},
  setShowEditResourceModal: () => {},
  setShowSubmitResourceModal: () => {},
});
ResourceContext.displayName = 'ResourceContext';

export const useResourceContext = () => useContext(ResourceContext);
