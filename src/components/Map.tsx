import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Config from '../config';
import {LatLngExpression} from "leaflet";

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

  // console.log({markers});

  const { latitude, longitude, zoom } = viewport;

  const renderMarkers = () => {
    return (
      <>
        {markers && markers[0].id && markers.map((marker) => {
          const {geojson} = marker.attributes;
          const parsedGeojson = JSON.parse(geojson);
          const {coordinates} = parsedGeojson;
          const latlng: LatLngExpression = [coordinates[1], coordinates[0]];

          if (marker.id !== '') {
            return (
              <Marker key={marker.id} position={latlng}>
                <Popup>
                  <div className="popup-content">
                    {popupContent(marker)}
                  </div>
                </Popup>
              </Marker>
            )
          } else {
            return null;
          }
        })}
      </>
    )
  }

  return (
    <MapContainer
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
