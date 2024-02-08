import React, {useCallback, useEffect, useRef, useState} from 'react';

import {ResourceContext} from '../context/ResourceContext';
import ProfessionalMap from "../components/ProfessionalMap/ProfessionalMap";
import InfoPanel from "../components/InfoPanel/InfoPanel";
import NavPanel from '../components/NavPanel/NavPanel';
import DeleteResourceModal from "../components/Modal/DeleteResourceModal";
import EditResourceModal from "../components/Modal/EditResourceModal";
import SubmitResourceModal from "../components/Modal/SubmitResourceModal";
import AddResourceModal from "../components/Modal/AddResourceModal";

import './Resource.scss';
import {useAppContext} from "../context/AppContext";
import {getCategoryWithProfessionals, listCategories} from "../lib/category";
import {CategoryObj, defaultCategoryObj} from "../types/category";
import {defaultProfessionalObj, ProfessionalObj} from "../types/professional";
import {IResponseObj, RelationshipObj, ResponseObj} from "../types/api";
import {getIncludedRelationshipsOfType} from "../lib/jsonapi";
import {getProfessional} from "../lib/professional";
import {LatLngExpression} from "leaflet";

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

  const [professionals, setProfessionals] = useState<ProfessionalObj[]>([defaultProfessionalObj]);
  const [categories, setCategories] = useState<CategoryObj[]>([defaultCategoryObj]);

  const [showDeleteResourceModal, setShowDeleteResourceModal] = useState(false);
  const [showAddResourceModal, setShowAddResourceModal] = useState(false);
  const [showEditResourceModal, setShowEditResourceModal] = useState(false);
  const [showSubmitResourceModal, setShowSubmitResourceModal] = useState(false);
  const [infoPanelExpanded, setInfoPanelExpanded] = useState(true);

  const [map, setMap] = useState(useRef(null));
  const [markers, setMarkers] = useState({});
  const [popups, setPopups] = useState({});

  let userId = null;
  if (match) {
    ({userId} = match.params);
  }

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
        const result: ResponseObj = await getCategoryWithProfessionals(accessToken, selectedCategory.id);
        // console.log({result});
        const {included, data}: IResponseObj = result;
        const relationships: RelationshipObj[] = data[0].relationships.professionals.data;
        // console.log({relationships});
        const professionalList: any[] = getIncludedRelationshipsOfType(
          included!, relationships, 'professional'
        );
        // console.log({professionalList});
        setProfessionals(professionalList);
      }
    } catch (e) {
      // setError(e);
    }
  }, [accessToken, selectedCategory.id]);

  const getProfessionalDetails = useCallback(async () => {
    try {
      if (selectedProfessional.id) {
        const result: ResponseObj = await getProfessional(accessToken, selectedProfessional.id);
        const professionalObj: any = result.data[0];
        setDisplayedProfessional(professionalObj);

        const {geojson} = selectedProfessional.attributes;
        const parsedGeojson = JSON.parse(geojson);
        const {coordinates} = parsedGeojson;
        const latlng: LatLngExpression = [coordinates[1], coordinates[0]];
        //@ts-ignore
        // map.current!.flyTo(latlng, 10);
        markers[selectedProfessional.id].current.openPopup()
      }
    } catch (e) {
      // setError(e);
    }
  }, [accessToken, selectedProfessional.id]);

  useEffect(() => {
    getCategories().then();
  }, [getCategories]);

  useEffect(() => {
    getProfessionalsForCategory().then();
  }, [selectedCategory.id, getProfessionalsForCategory]);

  useEffect(() => {
    getProfessionalDetails().then();
  }, [selectedProfessional.id, getProfessionalDetails]);

  return (
    <div className="ResourceContainer">
      <ResourceContext.Provider value={{
        getProfessionalsForCategory,

        displayedCategory, selectedCategory,
        displayedProfessional, selectedProfessional,

        setDisplayedCategory, setSelectedCategory,
        setDisplayedProfessional, setSelectedProfessional,

        professionals, categories,

        setProfessionals, setCategories,

        showDeleteResourceModal, showAddResourceModal,
        showEditResourceModal, showSubmitResourceModal,

        setShowDeleteResourceModal, setShowAddResourceModal,
        setShowEditResourceModal, setShowSubmitResourceModal,

        map, setMap, markers, setMarkers, popups, setPopups
      }}>
        <NavPanel userId={userId}/>
        <ProfessionalMap professionals={professionals}/>
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
