import React from 'react';
import {useResourceContext} from "../../context/ResourceContext";

const ProfessionalInfo = () => {
  const {displayedProfessional} = useResourceContext();
  const {
    namePrefix, nameFirst, nameLast, nameSuffix, organization,
    phoneMain, phoneFax, phoneCell, email, webUrl, socialMediaIds,
    specialties, speakingTopic, publications, barId, comments,
    addressStreet1, addressStreet2, addressCity, addressState, addressPostalCode, addressCountry
  } = displayedProfessional.attributes;

  const renderAddress = () => {
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
      {displayedProfessional.id ? (
        <>
          <div className="name">
            {namePrefix} {nameFirst} {nameLast} {nameSuffix}
          </div>
          <div className="infoSection organization">
            <div className="label">Organization</div>
            {organization}
          </div>
          <div className="infoSection website">
            <div className="label">Website</div>
            {webUrl}
          </div>
          <div className="infoSection email">
            <div className="label">Email</div>
            {email}
          </div>
          <div className="infoSection phone">
            <div className="label">Phone</div>
            {phoneMain}
          </div>
          <div className="infoSection fax">
            <div className="label">Fax</div>
            {phoneFax}
          </div>
          <div className="infoSection cell">
            <div className="label">Cell</div>
            {phoneCell}
          </div>
          <div className="infoSection social">
            <div className="label">Social Media IDs</div>
            {socialMediaIds}
          </div>
          <div className="infoSection address">
            <div className="label">Location</div>
            {renderAddress()}
          </div>
          <div className="infoSection description">
            <div className="label">Specialties</div>
            {specialties}
          </div>
          <div className="infoSection description">
            <div className="label">Speaking Topic</div>
            {speakingTopic}
          </div>
          <div className="infoSection description">
            <div className="label">Publications</div>
            {publications}
          </div>
          <div className="infoSection description">
            <div className="label">Bar ID</div>
            {barId}
          </div>
          <div className="infoSection description">
            <div className="label">Comments</div>
            {comments}
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

export default ProfessionalInfo;
