import React, {useEffect} from 'react';
import {ProfessionalObj} from "../../../types/App";
import {getProfessional} from "../../../libs/profLib";
import {useAppContext} from "../../../context/AppContext";

interface IProfessionalDetails {
  professional: ProfessionalObj;
}

const ProfessionalDetails = (props: IProfessionalDetails) => {
  const {professional} = props;
  const {
    nameFirst, nameLast, namePrefix, nameSuffix,
    addressStreet1, addressStreet2, addressCity, addressState, addressCountry, addressPostalCode,
    email, phoneCell, phoneFax, phoneMain, socialMediaIds, webUrl,
    organization, barId, publications, speakingTopic, specialties,
    comments, internalComments, internalReminders
  } = professional.attributes;

  console.log({professional});

  const renderProfessionalDetails = () => {
    return (
      <>
        <div className="itemGroup name">

          <div className="item">
            <div className="itemLabel">
              Salutation:
            </div>
            <div className="itemValue">
              {namePrefix}
            </div>
          </div>

          <div className="item">
            <div className="itemLabel">
              First name:
            </div>
            <div className="itemValue">
              {nameFirst}
            </div>
          </div>

          <div className="item">
            <div className="itemLabel">
              Last name:
            </div>
            <div className="itemValue">
              {nameLast}
            </div>
          </div>

          <div className="item">
            <div className="itemLabel">
              Post-nomial letters:
            </div>
            <div className="itemValue">
              {nameSuffix}
            </div>
          </div>

        </div>

        <div className="itemGroup address">

          <div className="item">
            <div className="itemLabel">
              Street 1
            </div>
            <div className="itemValue">
              {addressStreet1}
            </div>
          </div>

          <div className="item">
            <div className="itemLabel">
              Street 2
            </div>
            <div className="itemValue">
              {addressStreet2}
            </div>
          </div>

          <div className="item">
            <div className="itemLabel">
              City
            </div>
            <div className="itemValue">
              {addressCity}
            </div>
          </div>

          <div className="item">
            <div className="itemLabel">
              State
            </div>
            <div className="itemValue">
              {addressState}
            </div>
          </div>

          <div className="item">
            <div className="itemLabel">
              Country
            </div>
            <div className="itemValue">
              {addressCountry}
            </div>
          </div>

          <div className="item">
            <div className="itemLabel">
              Postal Code
            </div>
            <div className="itemValue">
              {addressPostalCode}
            </div>
          </div>

        </div>

        <div className="itemGroup contact">

          <div className="item">
            <div className="itemLabel">
              Email
            </div>
            <div className="itemValue">
              {email}
            </div>
          </div>

          <div className="item">
            <div className="itemLabel">
              Phone (main)
            </div>
            <div className="itemValue">
              {phoneMain}
            </div>
          </div>

          <div className="item">
            <div className="itemLabel">
              Phone (fax)
            </div>
            <div className="itemValue">
              {phoneFax}
            </div>
          </div>

          <div className="item">
            <div className="itemLabel">
              Phone (mobile)
            </div>
            <div className="itemValue">
              {phoneCell}
            </div>
          </div>

          <div className="item">
            <div className="itemLabel">
              Social Media Ids
            </div>
            <div className="itemValue">
              {socialMediaIds}
            </div>
          </div>

          <div className="item">
            <div className="itemLabel">
              Web URL
            </div>
            <div className="itemValue">
              {webUrl}
            </div>
          </div>

        </div>

        <div className="itemGroup other">

          <div className="item">
            <div className="itemLabel">
              Organization
            </div>
            <div className="itemValue">
              {organization}
            </div>
          </div>
          <div className="item">
            <div className="itemLabel">
              Bar ID
            </div>
            <div className="itemValue">
              {barId}
            </div>
          </div>

          <div className="item">
            <div className="itemLabel">
              Publications
            </div>
            <div className="itemValue">
              {publications}
            </div>
          </div>

          <div className="item">
            <div className="itemLabel">
              Speaking Topic
            </div>
            <div className="itemValue">
              {speakingTopic}
            </div>
          </div>

          <div className="item">
            <div className="itemLabel">
              Specialties
            </div>
            <div className="itemValue">
              {specialties}
            </div>
          </div>

        </div>

        <div className="itemGroup notes">

          <div className="item">
            <div className="itemLabel">
              Comments (public)
            </div>
            <div className="itemValue">
              {comments}
            </div>
          </div>

          <div className="item">
            <div className="itemLabel">
              Internal Comments (private)
            </div>
            <div className="itemValue">
              {internalComments}
            </div>
          </div>

          <div className="item">
            <div className="itemLabel">
              Internal Reminders (private)
            </div>
            <div className="itemValue">
              {internalReminders}
            </div>
          </div>

        </div>
      </>
    )
  }

  const renderNone = () => {
    return (
      <div className="none">
        No Professional Selected
      </div>
    )
  }

  return (
    <div className="ProfessionalDetails">
      {professional ? renderProfessionalDetails() : renderNone()}
    </div>
  )
}

export default ProfessionalDetails;
