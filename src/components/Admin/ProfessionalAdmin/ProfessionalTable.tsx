import React from 'react';
import {CategoryObj, ProfessionalObj} from "../../../types/App";
import ProfessionalRow from "./ProfessionalTable/ProfessionalRow";
import {Table} from "react-bootstrap";

interface IProfessionalTable {
  professionalList: ProfessionalObj[];
  categoryList: CategoryObj[];
  getProfessionalList: Function;
}

const ProfessionalTable = (props: IProfessionalTable) => {
  const {professionalList, categoryList, getProfessionalList} = props;

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
        />
      ))}
      </tbody>
    </Table>
  )
}

export default ProfessionalTable;
