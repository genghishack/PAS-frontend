import React from 'react';
import {Button} from "react-bootstrap";
import {useResourceContext} from "../../context/ResourceContext";
import {ProfessionalObj} from "../../types/professional";

interface IProfessionalItem {
  professional: ProfessionalObj
}

const ProfessionalItem = ({professional}: IProfessionalItem) => {
  const {selectedProfessional, setSelectedProfessional} = useResourceContext()
  const {id} = professional;

  const handleProfessionalClick = (evt) => {
    evt.preventDefault();
    console.log({professional});
    setSelectedProfessional(professional);
  }

  return (
    <Button variant="link"
            className={`professionalItem ${(selectedProfessional.id === id) ? 'selected' : ''}`}
            onClick={handleProfessionalClick}
    >
      {professional.attributes['nameFirst']} {professional.attributes['nameLast']}
    </Button>
  )
}

export default ProfessionalItem;
