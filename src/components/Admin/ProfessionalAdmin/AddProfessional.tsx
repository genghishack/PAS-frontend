import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckSquare, faPlusSquare, faTimes} from "@fortawesome/free-solid-svg-icons";
import {useFormFields} from "../../../libs/hooks";
import {createProfessional} from "../../../libs/professional";
import {useAppContext} from "../../../context/AppContext";

interface IAddProfessional {
  getProfessionalList: Function;
}

const AddProfessional = (props: IAddProfessional) => {
  const {getProfessionalList} = props;
  const {accessToken} = useAppContext();
  const [isAddingProfessional, setIsAddingProfessional] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    name_first: '',
    name_last: ''
  })

  const toggleAddProfessional = (evt) => {
    setIsAddingProfessional(!isAddingProfessional);
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setIsAddingProfessional(false);
    await createProfessional(accessToken, {name_first: fields.name_first, name_last: fields.name_last});
    await getProfessionalList();
  }

  const renderAddProfessionalForm = () => {
    return (
      <>
        <Button
          variant="link"
          onClick={toggleAddProfessional}
        ><FontAwesomeIcon
          icon={faTimes}
          className="failure"
        /></Button>
        <Form className="inline" onSubmit={handleSubmit}>
          <Form.Group controlId="name_first">
            <Form.Control
              type="text"
              placeholder="First name"
              value={fields.name_first}
              onChange={handleFieldChange}
            />
          </Form.Group>
          <Form.Group controlId="name_last">
            <Form.Control
              type="text"
              placeholder="Last name"
              value={fields.name_last}
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

  const renderAddProfessionalButton = () => {
    return (
      <>
        <Button
          variant="link"
          onClick={toggleAddProfessional}
        ><FontAwesomeIcon
          icon={faPlusSquare}
          className="info"
        /></Button>
        <div className="label">Add Professional</div>
      </>
    )
  }

  return (
    <div className="AddProfessional inline">
      {isAddingProfessional ? renderAddProfessionalForm() : renderAddProfessionalButton()}
    </div>
  )
}

export default AddProfessional;
