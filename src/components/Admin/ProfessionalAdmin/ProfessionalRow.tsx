import React, { useState } from 'react';
import {CategoryObj, IProfessionalObj, ProfessionalObj} from "../../../types/App";
import ProfessionalCategoryCell from "./ProfessionalCategoryCell";
import ProfessionalStatusCell from "./ProfessionalStatusCell";
import ProfessionalActionCell from "./ProfessionalActionCell";

interface IProfessionalRow {
  initialProfessionalData: ProfessionalObj;
  categoryList: CategoryObj[];
  getProfessionalList: Function;
}

const ProfessionalRow = (props: IProfessionalRow) => {
  const {initialProfessionalData, categoryList, getProfessionalList} = props;
  const [professional, setProfessional] = useState<ProfessionalObj>(initialProfessionalData);

  const {attributes: {
    nameFirst, nameLast, addressCity, addressState, addressCountry
  }}: IProfessionalObj = professional;

  return (
    <tr className="ProfessionalRow">
      <td>
        <div className="professionalCell">
          <div className="professionalNameFirst">{nameFirst}</div>
        </div>
      </td>
      <td>
        <div className="professionalCell">
          <div className="professionalNameLast">{nameLast}</div>
        </div>
      </td>
      <td>
        <div className="professionalCell">
          <div className="professionalAddressCity">{addressCity}</div>
        </div>
      </td>
      <td>
        <div className="professionalCell">
          <div className="professionalAddressState">{addressState}</div>
        </div>
      </td>
      <td>
        <div className="professionalCell">
          <div className="professionalAddressCountry">{addressCountry}</div>
        </div>
      </td>
      <td>
        <ProfessionalCategoryCell professional={professional}
                                  setProfessional={setProfessional}
                                  categoryList={categoryList}/>
      </td>
      <td>
        <ProfessionalStatusCell professional={professional}
                                setProfessional={setProfessional}
                                getProfessionalList={getProfessionalList}/>
      </td>
      <td>
        <ProfessionalActionCell professional={professional}
                                setProfessional={setProfessional}
                                getProfessionalList={getProfessionalList}/>
      </td>
    </tr>
  )
}

export default ProfessionalRow;
