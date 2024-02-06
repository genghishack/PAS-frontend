import React from 'react';
import {useResourceContext} from "../../context/ResourceContext";
import ProfessionalItem from "./ProfessionalItem";

const ProfessionalList = () => {
  const {professionals} = useResourceContext();
  // console.log('xyz', {professionals});

  return (
    <div className="professionalList">
      {professionals.map(professional => {
        // console.log({professional});
        if (professional) {
          return (
            <ProfessionalItem key={professional.id}
                              professional={professional}/>
          )
        }
      })}
    </div>
  );
}

export default ProfessionalList;
