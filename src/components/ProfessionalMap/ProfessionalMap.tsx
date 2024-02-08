import React, {useEffect, useRef, useState} from 'react';
import {continentalViewport} from '../../lib/map';
import Map from '../Map';
import {useResourceContext} from "../../context/ResourceContext";

import './ProfessionalMap.scss';

interface IProfessionalMap {
  professionals: any;
}

const ProfessionalMap = (props: IProfessionalMap) => {
  const {professionals} = props;
  const {setSelectedProfessional} = useResourceContext()
  const mapWindowRef = useRef(null);
  const [viewport, setViewport] = useState(continentalViewport());

  useEffect(() => {
    //@ts-ignore
    const width = mapWindowRef.current ? mapWindowRef.current.offsetWidth : 0;
    //@ts-ignore
    const height = mapWindowRef.current ? mapWindowRef.current.offsetHeight : 0
    setViewport(continentalViewport(width, height));
  }, []);

  // const handlePopupClick = (evt) => {
  //   evt.preventDefault();
  //   setSelectedProfessional
  // }

  const popupContent = (professional) => {
    const {nameLast, nameFirst, addressCity, addressState, addressCountry} = professional.attributes;
    return (
      <>
        <div className="professionalPopup">
          <div className="name" onClick={() => {
            setSelectedProfessional(professional);
          }}>
            <span className="nameFirst">{nameFirst}</span>&nbsp;<span className="nameLast">{nameLast}</span>
          </div>
          <div className="location">
            <span className="addressCity">{addressCity}</span>,
            <span className="addressState">{addressState}</span>
            <span className="addressCountry">{addressCountry}</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="ProfessionalMap" ref={mapWindowRef}>
      <Map
        viewport={viewport}
        markers={professionals}
        popupContent={popupContent}
      />
    </div>
  );
}

export default ProfessionalMap;
