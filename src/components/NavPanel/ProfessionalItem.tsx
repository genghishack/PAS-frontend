import React from 'react';
import {Button} from "react-bootstrap";
import {ProfessionalObj} from "../../types/App";
import {useResourceContext} from "../../context/ResourceContext";

interface IProfessionalItem {
  professional: ProfessionalObj
}

const ProfessionalItem = ({professional}: IProfessionalItem) => {
  const {setSelectedProfessional} = useResourceContext()
  const {id} = professional;

  const handleProfessionalClick = (evt) => {
    evt.preventDefault();
    // console.log({professional});
    setSelectedProfessional(professional);
  }

  return (
    <Button variant="link"
            className="professionalItem"
            onClick={handleProfessionalClick}
    >
      {professional['name_first']} {professional['name_last']}
    </Button>
  )
}

export default ProfessionalItem;
