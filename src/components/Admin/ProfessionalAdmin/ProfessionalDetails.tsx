import React, {useEffect} from 'react';
import {ProfessionalObj} from "../../../types/App";
import {getProfessional} from "../../../libs/profLib";
import {useAppContext} from "../../../context/AppContext";

interface IProfessionalDetails {
  professional: ProfessionalObj;
}

const ProfessionalDetails = (props: IProfessionalDetails) => {
  const {professional} = props;
  console.log({professional});

  const renderProfessionalDetails = () => {
    return (
      <span>{professional.attributes.nameFirst}</span>
    )
  }

  const renderNone = () => {
    return (
      <div className="ProfessionalNone">
        No Professional Selected
      </div>
    )
  }

  return (
    <div className="ProfessionalDetails">
      {professional ? renderProfessionalDetails() : renderNone()}
    </div>
  )
}

export default ProfessionalDetails;
