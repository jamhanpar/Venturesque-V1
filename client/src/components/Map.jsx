import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

// const {
//   MarkerWithLabel,
// } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const Map = ({ activities, restaurants, currentRestIdx, currentActIdx }) => {
  //pass restaurant coordinates down here
  const currRestaurant = restaurants[currentRestIdx];
  const currActivity = activities[currentActIdx];
  const mapCoord = {
    lat:
      (currRestaurant.coordinates.latitude +
        currActivity.geometry.location.lat) /
      2,
    long:
      (currRestaurant.coordinates.longitude +
        currActivity.geometry.location.lng) /
      2,
  };

  const Gmap = () => {
    return (
      <GoogleMap
        className="google-map-img"
        defaultZoom={15}
        defaultCenter={{ lat: mapCoord.lat, lng: mapCoord.long }}
      >
        <Marker
          key={currRestaurant.id}
          position={{
            lat: currRestaurant.coordinates.latitude,
            lng: currRestaurant.coordinates.longitude,
          }}
        />
        <Marker
          key={currActivity.place_id}
          position={{
            lat: currActivity.geometry.location.lat,
            lng: currActivity.geometry.location.lng,
          }}
        />
        {/* <MarkerWithLabel
          position={{ lat: -34.397, lng: 150.644 }}
          labelStyle={{
            backgroundColor: "yellow",
            fontSize: "32px",
            padding: "16px",
          }}
        >
          <div>{currRestaurant.name}</div>
        </MarkerWithLabel> */}
      </GoogleMap>
    );
  };

  const WrappedMap = withScriptjs(withGoogleMap(Gmap));

  return (
    <div className="google-map-container">
      <div className="google-map-img">
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
          loadingElement={<div style={{ height: "100%" }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: "100%" }} />}
        />
      </div>
    </div>
  );
};

export default Map;
