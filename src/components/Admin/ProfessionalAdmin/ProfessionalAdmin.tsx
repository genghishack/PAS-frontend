import React, {useEffect, useState} from 'react';
import {useAppContext} from "../../../context/AppContext";
import {getProfessional, listProfessionals} from "../../../libs/profLib";
import AddProfessional from "./AddProfessional";
import ProfessionalTable from "./ProfessionalTable";
import {defaultProfessionalObj, ProfessionalObj} from "../../../types/App";
import ProfessionalDetails from "./ProfessionalDetails";

const ProfessionalAdmin = () => {
  const {accessToken} = useAppContext();

  const [professionalList, setProfessionalList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedProfessional, setSelectedProfessional] = useState<ProfessionalObj|null>(null);
  const [professionalDetails, setProfessionalDetails] = useState<ProfessionalObj>(defaultProfessionalObj);

  const getProfessionalList = async () => {
    const professionals = await listProfessionals(accessToken);
    console.log({professionals});
    setProfessionalList(professionals.data);
    setCategoryList(professionals.included.filter((item) => {
      return item.type === 'category';
    }));
  }

  const getProfessionalDetails = async () => {
    const profDetails = await getProfessional(accessToken, selectedProfessional!.id);
    console.log({profDetails});
    setProfessionalDetails(profDetails.data[0]);
  }

  useEffect(() => {
    getProfessionalList().then();
  }, [])

  useEffect(() => {
    if (selectedProfessional) {
      getProfessionalDetails().then();
    }
  }, [selectedProfessional])

  useEffect(() => {
    console.log({categoryList});
  }, [categoryList])

  return (
    <div className="ProfessionalAdmin">
      <header>Professional admin</header>
      <AddProfessional getProfessionalList={getProfessionalList}/>
      {!selectedProfessional ? (
        <ProfessionalTable professionalList={professionalList}
                           categoryList={categoryList}
                           getProfessionalList={getProfessionalList}
                           setSelectedProfessional={setSelectedProfessional}
        />
      ) : (
        <ProfessionalDetails professional={professionalDetails!}/>
      )}
    </div>
  )
}

export default ProfessionalAdmin;
