import React, {useEffect, useRef, useState} from 'react';
import {continentalViewport} from '../../lib/map';
import Map from '../Map';

import './ResourceMap.scss';

interface IResourceMap {
  resources: any;
  professionals: any;
}

const ResourceMap = (props: IResourceMap) => {
  const {
    resources, professionals
  } = props;

  const mapWindowRef = useRef(null);

  const [viewport, setViewport] = useState(continentalViewport());

  useEffect(() => {
    //@ts-ignore
    const width = mapWindowRef.current ? mapWindowRef.current.offsetWidth : 0;
    //@ts-ignore
    const height = mapWindowRef.current ? mapWindowRef.current.offsetHeight : 0
    setViewport(continentalViewport(width, height));
  }, []);

  return (
    <div className="ResourceMap" ref={mapWindowRef}>
      <Map
        viewport={viewport}
        markers={resources}
        professionals={professionals}
      />
    </div>
  );
}

export default ResourceMap;
