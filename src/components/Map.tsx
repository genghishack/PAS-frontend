import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Config from '../config';
import {LatLngExpression} from "leaflet";

interface IMapProps {
  viewport: any;
  markers?: [any];
  professionals?: [any];
}

const mapConf = Config.mapbox;
const { username, accessToken, keys } = mapConf;

const tileUrl = `https://api.mapbox.com/styles/v1/${username}/${keys.bright}/tiles/256/{z}/{x}/{y}@2x?access_token=${accessToken}`

const Map = (props: IMapProps) => {
  const {viewport, markers, professionals} = props;

  // console.log({markers});

  const { latitude, longitude, zoom } = viewport;

  const renderMarkers = () => {
    return (
      <>
        {professionals && professionals[0].id && professionals.map((marker) => {
          const {geojson, nameLast, nameFirst, addressCity, addressState, addressCountry} = marker.attributes;
          const parsedGeojson = JSON.parse(geojson);
          const {coordinates} = parsedGeojson;
          const latlng: LatLngExpression = [coordinates[1], coordinates[0]];
          console.log({latlng});

          if (marker.id !== '') {
            return (
              <Marker key={marker.id} position={latlng}>
                <Popup>
                  <div className="popup-content">
                    <div className="name">
                      <span className="nameFirst">{nameFirst}</span>
                      <span className="nameLast">{nameLast}</span>
                    </div>
                    <div className="location">
                      <span className="addressCity">{addressCity}</span>,
                      <span className="addressState">{addressState}</span>
                      <span className="addressCountry">{addressCountry}</span>
                    </div>
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
