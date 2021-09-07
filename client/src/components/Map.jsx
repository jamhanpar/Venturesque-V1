import React, { useMemo, useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

// const {
//   MarkerWithLabel,
// } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const Map = ({ activities, restaurants, currentRestIdx, currentActIdx }) => {
	const [ selected, setSelected ] = useState(true);
	//pass restaurant coordinates down here
	const currRestaurant = restaurants[currentRestIdx];
	const currActivity = activities[currentActIdx];
	const mapCoord = {
		lat: (currRestaurant.coordinates.latitude + currActivity.geometry.location.lat) / 2,
		long: (currRestaurant.coordinates.longitude + currActivity.geometry.location.lng) / 2
	};

	// const locInfo = () => {
	// 	if (!selected) return null;

	// 	if (selected === 'restaurant') {
	// 		return (
	// 			<InfoWindow
	// 				position={{
	// 					lat: currRestaurant.coordinates.latitude,
	// 					lng: currRestaurant.coordinates.longitude
	// 				}}
  //         onCloseClick={() => setSelected(null)}
	// 			>
	// 				<div>details</div>
	// 			</InfoWindow>
	// 		);
	// 	} else if (selected === 'activity') {
	// 		return (
	// 			<InfoWindow
	// 				position={{
	// 					lat: currActivity.geometry.location.lat,
	// 					lng: currActivity.geometry.location.lng
	// 				}}
  //         onCloseClick={() => setSelected(null)}
	// 			>
	// 				<div>details</div>
	// 			</InfoWindow>
	// 		);
	// 	}
	// };

	const Gmap = () => {
		return (
			<GoogleMap
				className="google-map-img"
				defaultZoom={14} // ideally 15
				defaultCenter={{ lat: mapCoord.lat, lng: mapCoord.long }}
			>
				<Marker
					key={currRestaurant.id}
					position={{
						lat: currRestaurant.coordinates.latitude,
						lng: currRestaurant.coordinates.longitude
					}}
					onClick={() => {
						setSelected('restaurant');
					}}
				/>
				<Marker
					key={currActivity.place_id}
					position={{
						lat: currActivity.geometry.location.lat,
						lng: currActivity.geometry.location.lng
					}}
					onClick={() => {
						setSelected('activity');
					}}
				/>
				{/* {locInfo()} */}
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
	const memoMap = useMemo(() => {
			return (
				<WrappedMap
					googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process
						.env.REACT_APP_GOOGLE_API_KEY}`}
					loadingElement={<div style={{ height: '100%' }} />}
					containerElement={<div style={{ height: '100%' }} />}
					mapElement={<div style={{ height: '100%' }} />}
				/>
			);
		},
		[ activities, restaurants, currentActIdx, currentRestIdx ]
	);

	return (
    
		<div className="google-map-container">
      {/* <button onClick={()=> console.log(locInfo())}>locinfo</button>
      <button onClick={()=> console.log(selected)}>selected</button> */}
			<div className="google-map-img">{memoMap}</div>
		</div>
	);
};

export default Map;
