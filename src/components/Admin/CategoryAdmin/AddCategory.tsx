import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare, faPlusSquare, faTimes} from "@fortawesome/free-solid-svg-icons";
import {useFormFields} from "../../../lib/hooks";
import {createCategory} from "../../../lib/category";
import {useAppContext} from "../../../context/AppContext";

interface IAddCategory {
  getCategoryList: Function;
}

const AddCategory = (props: IAddCategory) => {
  const {getCategoryList} = props;
  const {accessToken} = useAppContext();
  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    display_name: '',
  })

  const toggleAddCategory = (evt) => {
    setIsAddingCategory(!isAddingCategory);
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setIsAddingCategory(false);
    await createCategory(accessToken, {name_display: fields.name_display});
    await getCategoryList();
  }

  const renderAddCategoryForm = () => {
    return (
      <>
        <Button
          variant="link"
          onClick={toggleAddCategory}
        ><FontAwesomeIcon
          icon={faTimes}
          className="failure"
        /></Button>
        <Form className="inline" onSubmit={handleSubmit}>
          <Form.Group controlId="name_display">
            <Form.Control
              type="text"
              placeholder="Enter category name"
              value={fields.name_display}
              onChange={handleFieldChange}
            />
          </Form.Group>
          <Button
            type="submit"
            variant="link"
          ><FontAwesomeIcon
            icon={faCheckSquare}
            className="success"
          /></Button>
        </Form>
      </>
    )
  }

  const renderAddCategoryButton = () => {
    return (
      <>
        <Button
          variant="link"
          onClick={toggleAddCategory}
        ><FontAwesomeIcon
          icon={faPlusSquare}
          className="info"
        /></Button>
        <div className="label">Add Category</div>
      </>
    )
  }

  return (
    <div className="AddCategory inline">
      {isAddingCategory ? renderAddCategoryForm() : renderAddCategoryButton()}
    </div>
  )
}

export default AddCategory;
