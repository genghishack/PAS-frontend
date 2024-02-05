import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";
import {ProfessionalObj} from "../../../../types/App";
import {activateProfessional, deactivateProfessional, deleteProfessional} from "../../../../libs/professional";
import {useAppContext} from "../../../../context/AppContext";

interface IProfessionalStatusCell {
  professional: ProfessionalObj;
  setProfessional: Function;
}

const ProfessionalStatusCell = (props: IProfessionalStatusCell) => {
  const {professional, setProfessional} = props;
  const {accessToken} = useAppContext();

  const handleActivateProfessional = async () => {
    const updatedProfessional = await activateProfessional(accessToken, professional.id);
    setProfessional(updatedProfessional);
  }

  const handleDeactivateProfessional = async () => {
    const updatedProfessional = await deactivateProfessional(accessToken, professional.id);
    setProfessional(updatedProfessional);
  }

  return (
    <div className="ProfessionalCell status column">
      {professional.attributes.active ? (
        <>
          <div className="indicator">
            <div className="label success bold">Active</div>
          </div>
          <div className="option">
            <Button
              variant="link"
              onClick={handleDeactivateProfessional}
            >Deactivate</Button>
          </div>
        </>
      ) : (
        <>
          <div className="indicator">
            <div className="label failure bold">Inactive</div>
          </div>
          <div className="option">
            <Button
              variant="link"
              onClick={handleActivateProfessional}
            >Activate</Button>
          </div>
        </>
      )}
    </div>
  )
}

export default ProfessionalStatusCell;
