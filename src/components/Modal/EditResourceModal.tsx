import React, {useCallback, useEffect, useState} from 'react';
import {useResourceContext} from "../../context/ResourceContext";
import {Button, Form, Modal} from "react-bootstrap";
import {editResource} from "../../lib/resource";
import {onError} from "../../lib/error";
import ResourceFields from "../Form/ResourceFields";
import LoaderButton from "../LoaderButton/LoaderButton";
import {useFormFields} from "../../lib/hooks";

const EditResourceModal = () => {
  const {
    getProfessionalsForCategory,
    showEditResourceModal: show,
    setShowEditResourceModal: setShow,
    selectedProfessional: resource,
  } = useResourceContext();

  const emptyFormFields = {
    name: '',
    street_1: '',
    street_2: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    description: '',
    website: '',
    phone: '',
    fax: '',
    email: '',
    business: '',
  }

  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [fields, handleFieldChange] = useFormFields(emptyFormFields);

  const setFieldsToResource = useCallback(() => {
    fields.name = `${resource.attributes.nameFirst} ${resource.attributes.nameLast}`;
    fields.street_1 = resource.attributes.addressStreet1;
    fields.street_2 = resource.attributes.addressStreet2;
    fields.city = resource.attributes.addressCity;
    fields.state = resource.attributes.addressState;
    fields.country = resource.attributes.addressCountry;
    fields.postalCode = resource.attributes.addressPostalCode;
    fields.description = resource.attributes.comments;
    fields.website = resource.attributes.webUrl;
    fields.phone = resource.attributes.phoneMain;
    fields.fax = resource.attributes.phoneFax;
    fields.email = resource.attributes.email;
    fields.business = resource.attributes.organization;
  }, [fields, resource])

  useEffect(() => {
    if (show && resource.id) {
      setFieldsToResource();
      setShowModal(true);
    } else {
      setShowModal(false);
    }
    // TODO: adding setFieldsToResource as a dependency
    //  causes the submit to always send the original resource,
    //  rather than the edited one.  But not setting it gives
    //  a compile warning.  Is there a better way?
    // eslint-disable-next-line
  }, [resource, show, setShowModal])

  const validateForm = () => {
    return fields.name.length > 0
      && (fields.street_1.length > 0
        || fields.city.length > 0
        || fields.state.length > 0
        || fields.country.length > 0
        || fields.postalCode.length > 0);
  }

  const handleClose = () => setShow(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    setIsLoading(true);

    const {
      name, business, website, email, phone, fax,
      street_1, street_2, city, state, country, postalCode,
      description
    } = fields;

    try {
      await editResource(resource.id, {
        name,
        business,
        website,
        email,
        phone,
        fax,
        address: {street_1, street_2, city, state, country, postalCode},
        description,
      });
      await getProfessionalsForCategory();
      setIsLoading(false);
      setShow(false);
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  return (
    <Modal
      className="EditResourceModal"
      show={showModal}
      onHide={handleClose}
      animation={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit Resource</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <ResourceFields
            fields={fields}
            handleFieldChange={handleFieldChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            size="sm"
            variant="secondary"
            onClick={handleClose}
            tabIndex={14}
          >
            Cancel
          </Button>
          <LoaderButton
            size="sm"
            type="submit"
            isLoading={isLoading}
            disabled={!validateForm()}
            tabIndex={15}
          >
            Save Changes
          </LoaderButton>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default EditResourceModal;
