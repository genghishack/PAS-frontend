import React, {useEffect} from 'react';
import {ProfessionalObj} from "../../../types/App";
import {getProfessional} from "../../../libs/profLib";
import {useAppContext} from "../../../context/AppContext";
import DetailItem from "./ProfessionalDetails/DetailItem";

import './ProfessionalDetails/ProfessionalDetails.scss';
import DetailGroup from "./ProfessionalDetails/DetailGroup";

interface IProfessionalDetails {
  professional: ProfessionalObj;
}

export type DetailItemType = {
  label: string;
  value?: string;
}
export type ItemGroup = DetailItemType[];


const ProfessionalDetails = (props: IProfessionalDetails) => {
  const {professional} = props;
  const {
    nameFirst, nameLast, namePrefix, nameSuffix,
    addressStreet1, addressStreet2, addressCity, addressState, addressCountry, addressPostalCode,
    email, phoneCell, phoneFax, phoneMain, socialMediaIds, webUrl,
    organization, barId, publications, speakingTopic, specialties,
    comments, internalComments, internalReminders
  } = professional.attributes;

  const renderProfessionalDetails = () => {
    return (
      <>
        <div className="detailSection">
          <DetailGroup label="name" items={[
            {label: 'Salutation', value: namePrefix},
            {label: 'First Name', value: nameFirst},
            {label: 'Last name', value: nameLast},
            {label: 'Post-nomial letters', value: nameSuffix}
          ]}/>

          <DetailGroup label="address" items={[
            {label: 'Street 1', value: addressStreet1},
            {label: 'Street 2', value: addressStreet2},
            {label: 'City', value: addressCity},
            {label: 'State', value: addressState},
            {label: 'Country', value: addressCountry},
            {label: 'Postal Code', value: addressPostalCode},
          ]}/>
        </div>

        <div className="detailSection">
          <DetailGroup label="contact" items={[
            {label: 'Email', value: email},
            {label: 'Phone (main)', value: phoneMain},
            {label: 'Phone (fax)', value: phoneFax},
            {label: 'Phone (mobile)', value: phoneCell},
            {label: 'Website', value: webUrl},
            {label: 'Social Media', value: socialMediaIds}
          ]}/>

          <DetailGroup label="other" items={[
            {label: 'Organization', value: organization},
            {label: 'Bar ID', value: barId},
            {label: 'Publications', value: publications},
            {label: 'Speaking Topic', value: speakingTopic},
            {label: 'Specialties', value: specialties},
          ]}/>
        </div>

        <div className="detailSection">
          <DetailGroup label="notes" items={[
            {label: "Comments (public)", value: comments},
            {label: "Internal Comments (private)", value: internalComments},
            {label: "Internal Reminders (private)", value: internalReminders}
          ]}/>
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
