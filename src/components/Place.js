import React from 'react';
import { compose, withProps } from "recompose";
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps";

const Place = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=api_key",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>{
  return (
    <GoogleMap 
      defaultZoom={10} 
      center={props.latLng}>
      <Marker
        position={props.latLng}
      />      
    </GoogleMap>
  );
}
)
 export default Place;