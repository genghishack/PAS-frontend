import React, {useEffect, useState} from 'react';
import {useAppContext} from "../../../context/AppContext";
import {listProfessionals} from "../../../libs/profLib";
import AddProfessional from "./AddProfessional";
import ProfessionalTable from "./ProfessionalTable";

const ProfessionalAdmin = () => {
  const {accessToken} = useAppContext();

  const [professionalList, setProfessionalList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  const getProfessionalList = async () => {
    const professionals = await listProfessionals(accessToken);
    console.log({professionals});
    setProfessionalList(professionals.data);
    setCategoryList(professionals.included.filter((item) => {
      return item.type === 'category';
    }));
  }

  useEffect(() => {
    getProfessionalList().then();
  }, [])

  useEffect(() => {
    console.log({categoryList});
  }, [categoryList])

  return (
    <div className="ProfessionalAdmin">
      <header>Professional admin</header>
      <AddProfessional getProfessionalList={getProfessionalList}/>
      <ProfessionalTable professionalList={professionalList}
                         categoryList={categoryList}
                         getProfessionalList={getProfessionalList}/>
    </div>
  )
}

export default ProfessionalAdmin;
