import React, {useCallback, useEffect, useState} from 'react';

import {getResources} from "../libs/resourceLib";
import {ResourceContext} from '../context/ResourceContext';
import ResourceMap from "../components/ResourceMap/ResourceMap";
import InfoPanel from "../components/InfoPanel/InfoPanel";
import NavPanel from '../components/NavPanel/NavPanel';
import DeleteResourceModal from "../components/Modal/DeleteResourceModal";
import EditResourceModal from "../components/Modal/EditResourceModal";
import SubmitResourceModal from "../components/Modal/SubmitResourceModal";
import AddResourceModal from "../components/Modal/AddResourceModal";

import './Resource.scss';
import {useAppContext} from "../context/AppContext";

interface IResourceContainer {
  match?: any;
}

const ResourceContainer = (props: IResourceContainer) => {
  const {match} = props;
  const {resources, setResources} = useAppContext();

  const [displayedResource, setDisplayedResource] = useState({});
  const [selectedResource, setSelectedResource] = useState({});
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

  //@ts-ignore
  useEffect(() => {
    getMapMarkers().then();
  }, [getMapMarkers]);

  return (
    <div className="ResourceContainer">
      <ResourceContext.Provider value={{
        getMapMarkers,
        displayedResource, setDisplayedResource,
        selectedResource, setSelectedResource,
        showDeleteResourceModal, setShowDeleteResourceModal,
        showAddResourceModal, setShowAddResourceModal,
        showEditResourceModal, setShowEditResourceModal,
        showSubmitResourceModal, setShowSubmitResourceModal,
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
