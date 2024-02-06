import React from 'react';
import {useResourceContext} from "../../context/ResourceContext";

const ResourceInfo = () => {
  const {displayedProfessional: resource} = useResourceContext();

  const renderAddress = () => {
    const {
      addressStreet1, addressStreet2, addressCity, addressState, addressPostalCode, addressCountry
    } = resource.attributes;
    const street: string = `${addressStreet1} ${addressStreet2}`;
    const locality: string[] = [];
    if (addressCity) {
      locality.push(addressCity);
    }
    if (addressState) {
      locality.push(addressState);
    }

    return (
      <>
        <div className="street">{street}</div>
        <div className="locality">
          {`${locality.join(', ')} ${addressPostalCode}`}
        </div>
        <div className="country">{addressCountry}</div>
      </>
    );
  }

  return (
    <div className="ResourceInfo">
      {resource.id ? (
        <>
          <div className="name">
            {resource.attributes.nameFirst} {resource.attributes.nameLast}
          </div>
          <div className="infoSection business">
            <div className="label">Business</div>
            {resource.attributes.organization}
          </div>
          <div className="infoSection website">
            <div className="label">Website</div>
            {resource.attributes.webUrl}
          </div>
          <div className="infoSection email">
            <div className="label">Email</div>
            {resource.attributes.email}
          </div>
          <div className="infoSection phone">
            <div className="label">Phone</div>
            {resource.attributes.phoneMain}
          </div>
          <div className="infoSection fax">
            <div className="label">Fax</div>
            {resource.attributes.phoneFax}
          </div>
          <div className="infoSection address">
            <div className="label">Location</div>
            {renderAddress()}
          </div>
          <div className="infoSection description">
            <div className="label">Description</div>
            {resource.attributes.comments}
          </div>
        </>
      ) : (
        <div className="no-info">
          Click on a resource to display information.
        </div>
      )}
    </div>
  )
}

export default ResourceInfo;
