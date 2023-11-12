import React, {useCallback, useEffect, useState} from 'react';

import {getResources} from "../libs/resourceLib";
import {ResourceContext, useResourceContext} from '../context/ResourceContext';
import ResourceMap from "../components/ResourceMap/ResourceMap";
import InfoPanel from "../components/InfoPanel/InfoPanel";
import NavPanel from '../components/NavPanel/NavPanel';
import DeleteResourceModal from "../components/Modal/DeleteResourceModal";
import EditResourceModal from "../components/Modal/EditResourceModal";
import SubmitResourceModal from "../components/Modal/SubmitResourceModal";
import AddResourceModal from "../components/Modal/AddResourceModal";

import './Resource.scss';
import {useAppContext} from "../context/AppContext";
import {listProfessionals} from "../libs/profLib";
import {getCategoryWithProfessionals, listCategories} from "../libs/catLib";
import {CategoryObj, defaultCategoryObj, defaultProfessionalObj, ProfessionalObj, ResourceObj} from "../types/App";

interface IResourceContainer {
  match?: any;
}

const ResourceContainer = (props: IResourceContainer) => {
  const {match} = props;
  const {accessToken} = useAppContext();

  const [displayedCategory, setDisplayedCategory] = useState<CategoryObj>(defaultCategoryObj);
  const [selectedCategory, setSelectedCategory] = useState<CategoryObj>(defaultCategoryObj);
  const [displayedProfessional, setDisplayedProfessional] = useState<ProfessionalObj>(defaultProfessionalObj);
  const [selectedProfessional, setSelectedProfessional] = useState<ProfessionalObj>(defaultProfessionalObj);
  const [displayedResource, setDisplayedResource] = useState({});
  const [selectedResource, setSelectedResource] = useState({});

  const [resources, setResources] = useState<ResourceObj[]>([]);
  const [professionals, setProfessionals] = useState<ProfessionalObj[]>([defaultProfessionalObj]);
  const [categories, setCategories] = useState<CategoryObj[]>([defaultCategoryObj]);

  const [showDeleteResourceModal, setShowDeleteResourceModal] = useState(false);
  const [showAddResourceModal, setShowAddResourceModal] = useState(false);
  const [showEditResourceModal, setShowEditResourceModal] = useState(false);
  const [showSubmitResourceModal, setShowSubmitResourceModal] = useState(false);
  const [infoPanelExpanded, setInfoPanelExpanded] = useState(true);

  let userId = null;
  if (match) {
    ({userId} = match.params);
  }

  const getMapMarkers = useCallback(async () => {
    let markers = {data: []};
    try {
      markers = await getResources(userId);
      setResources(markers.data);
    } catch (e) {
      // setError(e);
    }
  }, [userId]);

  const getCategories = useCallback(async () => {
    try {
      const result = await listCategories(accessToken);
      setCategories(result.data);
    } catch (e) {
      // setError(e);
    }
  }, [accessToken]);

  const getProfessionalsForCategory = useCallback(async () => {
    try {
      if (selectedCategory.id) {
        const result = await getCategoryWithProfessionals(accessToken, selectedCategory.id);
        setProfessionals(result.data[0].attributes.professionals);
      }
    } catch (e) {
      // setError(e);
    }
  }, [accessToken, selectedCategory.id]);

  //@ts-ignore
  useEffect(() => {
    getMapMarkers().then();
  }, [getMapMarkers]);

  useEffect(() => {
    getCategories().then();
  }, [getCategories]);

  useEffect(() => {
    getProfessionalsForCategory().then();
  }, [getProfessionalsForCategory, selectedCategory.id])

  return (
    <div className="ResourceContainer">
      <ResourceContext.Provider value={{
        getMapMarkers,

        displayedCategory, selectedCategory,
        displayedProfessional, selectedProfessional,
        displayedResource, selectedResource,

        setDisplayedCategory, setSelectedCategory,
        setDisplayedProfessional, setSelectedProfessional,
        setDisplayedResource, setSelectedResource,

        resources, professionals, categories,

        setResources, setProfessionals, setCategories,

        showDeleteResourceModal, showAddResourceModal,
        showEditResourceModal, showSubmitResourceModal,

        setShowDeleteResourceModal, setShowAddResourceModal,
        setShowEditResourceModal, setShowSubmitResourceModal,
      }}>
        <NavPanel
          resources={resources}
          userId={userId}
        />
        <ResourceMap resources={resources}/>
        <InfoPanel
          slide={false}
          expanded={infoPanelExpanded}
          setExpanded={setInfoPanelExpanded}
        />
        <DeleteResourceModal/>
        <AddResourceModal/>
        <EditResourceModal/>
        <SubmitResourceModal/>
      </ResourceContext.Provider>
    </div>
  )
}

export default ResourceContainer;
