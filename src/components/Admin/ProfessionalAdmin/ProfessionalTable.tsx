import React from 'react';
import ProfessionalRow from "./ProfessionalTable/ProfessionalRow";
import {Table} from "react-bootstrap";
import {CategoryObj} from "../../../types/category";
import {ProfessionalObj} from "../../../types/professional";

interface IProfessionalTable {
  professionalList: ProfessionalObj[];
  categoryList: CategoryObj[];
  getProfessionalList: Function;
  setSelectedProfessional: Function;
}

const ProfessionalTable = (props: IProfessionalTable) => {
  const {professionalList, categoryList, getProfessionalList, setSelectedProfessional} = props;

  return (
    <Table striped bordered hover>
      <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>City</th>
        <th>State</th>
        <th>Country</th>
        <th>Categories</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
      </thead>
      <tbody>
      {professionalList.map((professional: ProfessionalObj) => (
        <ProfessionalRow
          key={professional.id}
          initialProfessionalData={professional}
          categoryList={categoryList}
          getProfessionalList={getProfessionalList}
          setSelectedProfessional={setSelectedProfessional}
        />
      ))}
      </tbody>
    </Table>
  )
}

export default ProfessionalTable;
