import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";
import {ProfessionalObj} from "../../../../types/App";
import {activateProfessional, deactivateProfessional, deleteProfessional} from "../../../../libs/profLib";
import {useAppContext} from "../../../../context/AppContext";

interface IProfessionalStatusCell {
  professional: ProfessionalObj;
  setProfessional: Function;
  getProfessionalList: Function;
}

const ProfessionalStatusCell = (props: IProfessionalStatusCell) => {
  const {professional, setProfessional, getProfessionalList} = props;
  const {accessToken} = useAppContext();

  const handleDeleteProfessional = async () => {
    await deleteProfessional(accessToken, professional.id)
    getProfessionalList();
  }

  const handleActivateProfessional = async () => {
    const updatedProfessional = await activateProfessional(accessToken, professional.id);
    setProfessional(updatedProfessional);
  }

  const handleDeactivateProfessional = async () => {
    const updatedProfessional = await deactivateProfessional(accessToken, professional.id);
    setProfessional(updatedProfessional);
  }

  const renderActive = () => {
    return (
      <>
        <FontAwesomeIcon
          className="success"
          icon={faCheckCircle}
          title="active"
        />
        <div className="label">Active</div>
      </>
    )
  }

  const renderInactive = () => {
    return (
      <>
        <FontAwesomeIcon
          className="failure"
          icon={faTimesCircle}
          title="inactive"
        />
        <div className="label">Inactive</div>
      </>
    )
  }

  return (
    <div className="professionalCell">
      {professional.attributes.active ? renderActive() : renderInactive()}
    </div>
  )
}

export default ProfessionalStatusCell;
