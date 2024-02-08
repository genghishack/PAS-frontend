import React from 'react';

import closeSVG from "../../assets/close_icon.png"
import ProfessionalInfo from "./ProfessionalInfo";

import "./InfoPanel.scss";

interface IInfoBoxProps {
  slide?: boolean;
  expanded?: boolean;
  setExpanded?: Function;
}

const InfoPanel = (props: IInfoBoxProps) => {
  const {slide, expanded, setExpanded} = props;

  const handleCloseClick = (e) => {
    if (setExpanded) {
      setExpanded(false);
    }
  };

  const expandedClass = expanded ? "expanded" : "";

  if (slide) {
    return (
      <div className={`InfoPanel slide ${expandedClass}`}>
        <img
          className="closeIcon"
          src={closeSVG}
          alt="close"
          onClick={handleCloseClick}
        />
        <div className="infoPanelContent">
          <ProfessionalInfo/>
        </div>
      </div>
    )
  } else {
    return (
      <div className="InfoPanel">
        <div className="infoPanelContent">
          <ProfessionalInfo/>
        </div>
      </div>
    )
  }
};

export default InfoPanel;
