import React, { useState } from 'react';
import ProfessionalCategoryCell from "./ProfessionalCategoryCell";
import ProfessionalStatusCell from "./ProfessionalStatusCell";
import ProfessionalActionCell from "./ProfessionalActionCell";
import {CategoryObj} from "../../../../types/category";
import {IProfessionalObj, ProfessionalObj} from "../../../../types/professional";

interface IProfessionalRow {
  initialProfessionalData: ProfessionalObj;
  categoryList: CategoryObj[];
  getProfessionalList: Function;
  setSelectedProfessional: Function;
}

const ProfessionalRow = (props: IProfessionalRow) => {
  const {initialProfessionalData, categoryList, getProfessionalList, setSelectedProfessional} = props;
  const [professional, setProfessional] = useState<ProfessionalObj>(initialProfessionalData);

  const {attributes: {
    nameFirst, nameLast, addressCity, addressState, addressCountry
  }}: IProfessionalObj = professional;

  return (
    <tr className="ProfessionalRow">
      <td>
        <div className="ProfessionalCell nameFirst row">
          <div className="professionalNameFirst">{nameFirst}</div>
        </div>
      </td>
      <td>
        <div className="ProfessionalCell nameLast row">
          <div className="professionalNameLast">{nameLast}</div>
        </div>
      </td>
      <td>
        <div className="ProfessionalCell city row">
          <div className="professionalAddressCity">{addressCity}</div>
        </div>
      </td>
      <td>
        <div className="ProfessionalCell state row">
          <div className="professionalAddressState">{addressState}</div>
        </div>
      </td>
      <td>
        <div className="ProfessionalCell country row">
          <div className="professionalAddressCountry">{addressCountry}</div>
        </div>
      </td>
      <td>
        <ProfessionalCategoryCell professional={professional}
                                  setProfessional={setProfessional}
                                  categoryList={categoryList}
        />
      </td>
      <td>
        <ProfessionalStatusCell professional={professional}
                                setProfessional={setProfessional}
        />
      </td>
      <td>
        <ProfessionalActionCell professional={professional}
                                setProfessional={setProfessional}
                                getProfessionalList={getProfessionalList}
                                setSelectedProfessional={setSelectedProfessional}
        />
      </td>
    </tr>
  )
}

export default ProfessionalRow;
