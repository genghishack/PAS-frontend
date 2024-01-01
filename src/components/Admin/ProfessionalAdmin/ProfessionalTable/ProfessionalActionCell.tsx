import {ProfessionalObj} from "../../../../types/App";
import {useAppContext} from "../../../../context/AppContext";
import {activateProfessional, deactivateProfessional, deleteProfessional} from "../../../../libs/profLib";
import React from "react";
import {Button} from "react-bootstrap";

interface IProfessionalActionCell {
  professional: ProfessionalObj;
  setProfessional: Function;
  getProfessionalList: Function;
  setSelectedProfessional: Function;
}

const ProfessionalActionCell = (props: IProfessionalActionCell) => {
  const {professional, setProfessional, getProfessionalList, setSelectedProfessional} = props;
  const {accessToken} = useAppContext();

  const handleEditProfessional = async () => {
    setSelectedProfessional(professional);
  }

  const handleDeleteProfessional = async () => {
    await deleteProfessional(accessToken, professional.id)
    getProfessionalList();
  }

  return (
    <div className="ProfessionalCell action column">
      <div className="options">
        <div className="option">
          <Button
            variant="link"
            onClick={handleEditProfessional}
          >Edit</Button>
        </div>
        <div className="option">
          <Button
            variant="link"
            onClick={handleDeleteProfessional}
          >Delete</Button>
        </div>
      </div>
    </div>
  )
}

export default ProfessionalActionCell;
