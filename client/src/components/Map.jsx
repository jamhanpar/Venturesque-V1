import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const Map = ({
  coord,
  activities,
  restaurants,
  currentRestIdx,
  currentActIdx,
}) => {
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
      </GoogleMap>
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
