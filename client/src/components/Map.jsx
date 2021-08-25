import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = ({ coord }) => {
  const Gmap = () => {
    return (
      <GoogleMap
        className="google-map-img"
        defaultZoom={16}
        defaultCenter={{ lat: coord.lat, lng: coord.long }}
      />
    );
  };

  const WrappedMap = withScriptjs(withGoogleMap(Gmap));

  return (
    <div className="google-map-img">
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  );
};

export default Map;