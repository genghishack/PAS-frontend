import {ProfessionalObj} from "../../../types/App";
import {useAppContext} from "../../../context/AppContext";
import {activateProfessional, deactivateProfessional, deleteProfessional} from "../../../libs/profLib";
import React from "react";
import {Button} from "react-bootstrap";

interface IProfessionalActionCell {
  professional: ProfessionalObj;
  setProfessional: Function;
  getProfessionalList: Function;
}

const ProfessionalActionCell = (props: IProfessionalActionCell) => {
  const {professional, setProfessional, getProfessionalList} = props;
  const {accessToken} = useAppContext();

  const handleEditProfessional = async () => {

  }

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
        <div className="option">
          <Button
            variant="link"
            onClick={handleDeactivateProfessional}
          >Deactivate</Button>
        </div>
      </>
    )
  }

  const renderInactive = () => {
    return (
      <>
        <div className="option">
          <Button
            variant="link"
            onClick={handleActivateProfessional}
          >Activate</Button>
        </div>
        <div className="option">
          <Button
            variant="link"
            onClick={handleDeleteProfessional}
          >Delete</Button>
        </div>
      </>
    )
  }

  return (
    <div className="professionalCell">
      <div className="options">
        <div className="option">
          <Button
            variant="link"
            onClick={handleEditProfessional}
          >Edit</Button>
        </div>
        {professional.attributes.active ? renderActive() : renderInactive()}
      </div>
    </div>
  )
}

export default ProfessionalActionCell;
