import React, { useState } from 'react';
import {IProfessionalObj, ProfessionalObj} from "../../../types/App";

interface IProfessionalRow {
  initialProfessionalData: ProfessionalObj;
  getProfessionalList: Function;
}

const ProfessionalRow = (props: IProfessionalRow) => {
  const {initialProfessionalData} = props;
  const [professional, setProfessional] = useState<ProfessionalObj>(initialProfessionalData);

  const {attributes: {
    nameFirst, nameLast, namePrefix, nameSuffix, organization,
    addressCity, addressState, addressCountry, categories
  }}: IProfessionalObj = professional;

  return (
    <tr className="ProfessionalRow">
      <td>
        <div className="ProfessionalCell">
          <div className="professionalNamePrefix">{namePrefix}</div>
        </div>
      </td>
      <td>
        <div className="ProfessionalCell">
          <div className="professionalNameFirst">{nameFirst}</div>
        </div>
      </td>
      <td>
        <div className="ProfessionalCell">
          <div className="professionalNameLast">{nameLast}</div>
        </div>
      </td>
      <td>
        <div className="ProfessionalCell">
          <div className="professionalNameSuffix">{nameSuffix}</div>
        </div>
      </td>
      <td>
        <div className="ProfessionalCell">
          <div className="professionalOrganization">{organization}</div>
        </div>
      </td>
      <td>
        <div className="ProfessionalCell">
          <div className="professionalAddressCity">{addressCity}</div>
        </div>
      </td>
      <td>
        <div className="ProfessionalCell">
          <div className="professionalAddressState">{addressState}</div>
        </div>
      </td>
      <td>
        <div className="ProfessionalCell">
          <div className="professionalAddressCountry">{addressCountry}</div>
        </div>
      </td>
      <td>
        <div className="ProfessionalCell">
          <div className="professionalCategories"></div>
        </div>
      </td>
    </tr>
  )
}

export default ProfessionalRow;
