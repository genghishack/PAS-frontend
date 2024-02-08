import React, {useRef, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Config from '../config';
import {LatLngExpression} from "leaflet";
import RefMarker from "./RefMarker";
import {useResourceContext} from "../context/ResourceContext";

interface IMapProps {
  viewport: any;
  markers: [any];
  popupContent: Function;
}

const mapConf = Config.mapbox;
const { username, accessToken, keys } = mapConf;

const tileUrl = `https://api.mapbox.com/styles/v1/${username}/${keys.bright}/tiles/256/{z}/{x}/{y}@2x?access_token=${accessToken}`

const Map = (props: IMapProps) => {
  const {viewport, markers, popupContent} = props;
  const { latitude, longitude, zoom } = viewport;
  const {map} = useResourceContext();

  const renderMarkers = () => {
    return (
      <>
        {markers && markers[0].id && markers.map((marker) => (
          <RefMarker key={marker.id} marker={marker} popupContent={popupContent}/>
        ))}
      </>
    )
  }

  return (
    <MapContainer
      ref={map}
      center={[latitude, longitude]}
      zoom={zoom}
      zoomSnap={0.1}
      scrollWheelZoom={true}
      style={{width: '100%', height: 'calc(100vh - 70px)'}}
    >
      <TileLayer url={tileUrl}/>
      {renderMarkers()}
    </MapContainer>
  );
}

export default Map;
