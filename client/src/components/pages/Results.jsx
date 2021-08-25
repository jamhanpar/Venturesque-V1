import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useReactRouter from "use-react-router";

import { useSearchContext } from "../../hooks/contexts/searchContext";
import { fetchRestaurants } from "../../util/apis/restaurants";
import { fetchActivities } from "../../util/apis/activities";

import Restaurants from "../Restaurants/Restaurants";
import Activities from "../Activities/Activities";
import SearchInputForm from "../SearchInputForm";
import Map from "../Map";

import googleMap from "../../assets/img/temp-google-map.png";
import loadingGif from "../../assets/gifs/loading.gif";

const Results = () => {
  const searchCtx = useSearchContext();
  const [locationTerm, setLocationTerm] = useState();
  const [cuisineTerm, setCuisineTerm] = useState();
  const [restaurants, setRestaurants] = useState();
  const [activities, setActivities] = useState();
  
  const [showRestaurantsToggle, setShowRestaurantsToggle] = useState(false);
  const [showActivitiesToggle, setShowActivitiesToggle] = useState(false);

  let { term, location } = useParams();
  const { history } = useReactRouter();

  useEffect(() => {
    setLocationTerm(location);
    setCuisineTerm(term);

    // get restaurants
    fetchRestaurants(searchCtx.search, searchCtx.cuisine).then((res) => {
      setRestaurants(res);

      // get activities
      fetchActivities(
        res[0].coordinates.latitude,
        res[0].coordinates.longitude
      ).then((res) => {
        setActivities(res);
      });
    });
    // eslint-disable-next-line
  }, [searchCtx.search]);

  if (!restaurants || !activities) return (
    <div className="loading-container">
      <img className="loading-gif" src={loadingGif} alt="Loading..." />
    </div>
  );

  const results = (cuisine, location) => {
    const urlEncodedTerm = encodeURI(cuisine);
    const urlEncodedLocation = encodeURI(location);
    history.push(
      `/search/term=${urlEncodedTerm}&location=${urlEncodedLocation}`
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    results(cuisineTerm, locationTerm);
    searchCtx.setSearch(locationTerm);
    searchCtx.setCuisine(cuisineTerm);
  };

  return (
    <div className="search-results-section">
      <div className="search-results-container">
        <div className="search-items-container">
          <div className="results-search-container">
            <SearchInputForm
              handleSubmit={handleSubmit}
              locationTerm={locationTerm}
              cuisineTerm={cuisineTerm}
              setLocationTerm={setLocationTerm}
              setCuisineTerm={setCuisineTerm}
            />
            <div className="restaurant-activity-container">
              <Restaurants restaurants={restaurants} getBestRestaurant={true} />
              <button className="toggle-btn" onClick={() => setShowRestaurantsToggle(!showRestaurantsToggle)}>Show more...</button>
              <Activities activities={activities} getBestActivity={true} />
              <button className="toggle-btn" onClick={() => setShowActivitiesToggle(!showActivitiesToggle)}>Show more...</button>
            </div>
          </div>
        </div>
        <div className="google-map-container">
          <img className="google-map-img" src={googleMap} alt="google maps" />
          <Map />
        </div>
      </div>
      <div className={showRestaurantsToggle && showActivitiesToggle && "list-container"}>
        {showRestaurantsToggle && <Restaurants restaurants={restaurants} />}
        {showActivitiesToggle && <Activities activities={activities} />}
      </div>
    </div>
  );
};

Results.defaultProps = {
  location: "hoboken",
  cuisine: "restaurant",
};

// const msp = () => ({});

// const mdp = (dispatch) => ({
//   fetchUser: () => dispatch(fetchUser()),
// });

// export default connect(null, mdp)(Results);

export default Results;