import React, {useEffect, useState} from 'react';
import {CategoryObj, ProfessionalObj, RelationshipObj} from "../../../../types/App";
import {addProfessionalToCategory, removeProfessionalFromCategory} from "../../../../libs/professional";
import {useAppContext} from "../../../../context/AppContext";
import {Dropdown, DropdownButton} from "react-bootstrap";
import DropdownItem from "react-bootstrap/DropdownItem";

interface IProfessionalCategoryCell {
  professional: ProfessionalObj;
  setProfessional: Function;
  categoryList: CategoryObj[];
}

const ProfessionalCategoryCell = (props: IProfessionalCategoryCell) => {
  const {professional, setProfessional, categoryList} = props;
  const [categorySuggestions, setCategorySuggestions] = useState<CategoryObj[]>([]);
  const {accessToken} = useAppContext();

  useEffect(() => {
    const suggestions: CategoryObj[] = [];
    const professionalCategoryIds = professional.relationships!.categories.data.map((rel: RelationshipObj) => {
      return rel.id;
    })
    const professionalCategories = categoryList.filter((category: CategoryObj) => {
      return professionalCategoryIds.includes(category.id);
    })
    categoryList.forEach((category: CategoryObj) => {
      if (!professionalCategories.includes(category)) {
        suggestions.push(category);
      }
    })
    setCategorySuggestions(suggestions);
  }, [categoryList, professional.relationships!.categories.data])

  const handleAddCategory = async (category: CategoryObj) => {
    const updatedProfessional = await addProfessionalToCategory(accessToken, professional.id, category.id);
    setProfessional(updatedProfessional);
  }

  const handleRemoveCategory = async (category: CategoryObj) => {
    const updatedProfessional = await removeProfessionalFromCategory(accessToken, professional.id, category.id);
    setProfessional(updatedProfessional);
  }

  return (
    <div className="ProfessionalCell categories row">
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
      <div className="option">
        <Dropdown>
          <DropdownButton
            disabled={!categorySuggestions.length}
            className="addCategoryMenu"
            title="add category"
            variant="link"
          >
            {categorySuggestions.map((category: CategoryObj) => (
              <DropdownItem
                key={category.id}
                onClick={() => handleAddCategory(category)}
              >{category.attributes.nameDisplay}</DropdownItem>
            ))}
          </DropdownButton>
        </Dropdown>
      </div>
    </div>
  )
}

export default ProfessionalCategoryCell;

