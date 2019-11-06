import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { compose, withProps } from "recompose";
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps";

const Place = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=apikey",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>{
  console.log(props.latLng)
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