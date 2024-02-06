import React from "react";
import {Auth} from "aws-amplify";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

import LoaderButton from "../LoaderButton/LoaderButton";
import {onError} from "../../lib/error";
import {getUser} from '../../lib/user';
import {useProfileContext} from "../../context/ProfileContext";
import {useAppContext} from "../../context/AppContext";

const ChangeName = () => {
  const {setCurrentUser} = useAppContext();
  const {
    profilePhaseTransition,
    isLoading, setIsLoading,
    fields, handleFieldChange,
  } = useProfileContext();

  function validateForm() {
    return fields.name.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const user = await Auth.currentAuthenticatedUser();
      await Auth.updateUserAttributes(user, {name: fields.name});
      const updatedUser = await getUser();
      setCurrentUser(updatedUser.data);
      profilePhaseTransition('profile');
    } catch (error) {
      onError(error);
      setIsLoading(false);
    }
  }

  return (
    <div className="ChangeName">
      <Form onSubmit={handleSubmit}>
        <header>Change name</header>
        {/*@ts-ignore*/}
        <Form.Group size="lg" controlId="name">
          <Form.Text>Name</Form.Text>
          <Form.Control
            autoFocus
            type="text"
            value={fields.name}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <div className="options">
          <div/>
          <Button className="option" variant="link" onClick={() => {
            profilePhaseTransition('profile')
          }}>
            Return to profile
          </Button>
        </div>
        <LoaderButton
          block
          type="submit"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Update Name
        </LoaderButton>
      </Form>
    </div>
  );
}

export default ChangeName;
