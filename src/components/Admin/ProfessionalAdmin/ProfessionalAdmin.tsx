import React, {useEffect, useState} from 'react';
import {useAppContext} from "../../../context/AppContext";
import {listProfessionals} from "../../../libs/profLib";
import {Table} from "react-bootstrap";
import ProfessionalRow from "./ProfessionalRow";

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

      <Table striped bordered hover>
        <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>City</th>
          <th>State</th>
          <th>Country</th>
          <th>Categories</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {professionalList.map((professional: any) => (
          <ProfessionalRow
            key={professional.id}
            initialProfessionalData={professional}
            categoryList={categoryList}
            getProfessionalList={getProfessionalList}
          />
        ))}
        </tbody>
      </Table>
    </div>
  )
}

export default ProfessionalAdmin;
