import React from "react";
import {useAppContext} from "../../../../context/AppContext";
import {Button} from "react-bootstrap";
import {CategoryObj} from "../../../../types/category";

interface ICategoryActionCell {
  category: CategoryObj;
  setCategory: Function;
  getCategoryList: Function;
}

const CategoryActionCell = (props: ICategoryActionCell) => {
  const {category, setCategory, getCategoryList} = props;
  const {accessToken} = useAppContext();

  const handleEditCategory = async () => {

  }

  const handleDeleteCategory = async () => {

  }

  return (
    <>
      <div className="categoryCell">
        <div className="categoryAction">
          <div className="options">
            <div className="option">
              <Button
                variant="link"
                onClick={handleEditCategory}
              >Edit</Button>
            </div>
            <div className="option">
              <Button
                variant="link"
                onClick={handleDeleteCategory}
              >Delete</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryActionCell;
