import React, {useEffect, useState} from 'react';
import {CategoryObj, ProfessionalObj, RelationshipObj} from "../../../types/App";
import {removeProfessionalFromCategory} from "../../../libs/profLib";
import {useAppContext} from "../../../context/AppContext";

interface IProfessionalCategoryCell {
  professional: ProfessionalObj;
  setProfessional: Function;
  categoryList: CategoryObj[];
}

const ProfessionalCategoryCell = (props: IProfessionalCategoryCell) => {
  const {professional, setProfessional, categoryList} = props;
  const {accessToken} = useAppContext();

  const handleRemoveCategory = async (category: CategoryObj) => {
    const updatedProfessional = await removeProfessionalFromCategory(accessToken, professional.id, category.id);
    setProfessional(updatedProfessional);
  }

  return (
    <div className="ProfessionalCell">
      <div className="professionalCategories">
        <div className="chips">
        {professional.relationships!.categories!.data.map((relObj: RelationshipObj, idx: number) => {
          const categoryId = relObj.id;
          const [categoryObj] = categoryList.filter((catObj: CategoryObj) => {
            return catObj.id === categoryId;
          })

          return (
            <span className="chip" key={idx}>
              <span className="chip-value">{categoryObj.attributes.nameDisplay}</span>
              <button
                type="button"
                className="chip-delete-button"
                onClick={() => handleRemoveCategory(categoryObj)}
              >x</button>
            </span>
          )
        })}
        </div>
      </div>
    </div>
  )
}

export default ProfessionalCategoryCell;

