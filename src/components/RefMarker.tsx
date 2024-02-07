import {LatLngExpression} from "leaflet";
import {Marker, Popup} from "react-leaflet";
import React, {useEffect, useRef} from "react";
import {useResourceContext} from "../context/ResourceContext";

interface IRefMarker {
  marker: any;
  popupContent: Function;
}

const RefMarker = (props: IRefMarker) => {
  const {marker, popupContent} = props;
  const {geojson} = marker.attributes;
  const parsedGeojson = JSON.parse(geojson);
  const {coordinates} = parsedGeojson;
  const latlng: LatLngExpression = [coordinates[1], coordinates[0]];
  const {markers, popups} = useResourceContext()

  markers[marker.id] = useRef(null);
  popups[marker.id] = useRef(null);

  if (marker.id !== '') {
    return (
      <Marker key={marker.id} position={latlng} ref={markers[marker.id]}>
        <Popup ref={popups[marker.id]}>
          <div className="popup-content">
            {popupContent(marker)}
          </div>
        </Popup>
      </Marker>
    )
  } else {
    return null;
  }
}

export default RefMarker;
