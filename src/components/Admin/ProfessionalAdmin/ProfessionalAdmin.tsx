import React, {useEffect, useState} from 'react';
import {useAppContext} from "../../../context/AppContext";
import {listProfessionals} from "../../../libs/profLib";
import {Table} from "react-bootstrap";

const ProfessionalAdmin = () => {
  const {accessToken} = useAppContext();

  const [professionalList, setProfessionalList] = useState([]);

  const getProfessionalList = async () => {
    const professionals = await listProfessionals(accessToken);
    console.log({professionals});
    setProfessionalList(professionals.data);
  }

  useEffect(() => {
    getProfessionalList().then();
  }, [])

  return (
    <div className="ProfessionalAdmin">
      <header>Professional admin</header>

      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Prefix</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Suffix</th>
          <th>Organization</th>
          <th>City</th>
          <th>State</th>
          <th>Country</th>
          <th>Categories</th>
        </tr>
        </thead>
      </Table>
    </div>
  )
}

export default ProfessionalAdmin;
