import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useReactRouter from "use-react-router";
import { connect } from "react-redux";

import { fetchUser } from "../../actions/user_actions";
import { useSearchContext } from "../../hooks/contexts/searchContext";
import { fetchRestaurants } from "../../util/apis/restaurants";
import { fetchActivities } from "../../util/apis/activities";
import Restaurants from "../Restaurants/Restaurants";
import Activities from "../Activities/Activities";
import googleMap from "../../assets/img/temp-google-map.png";
import "../stylesheets/results.scss";
import '../stylesheets/searchResultItem.scss';

import SearchInputForm from "../SearchInputForm";

const Results = () => {
  const searchCtx = useSearchContext();
  const [locationTerm, setLocationTerm] = useState();
  const [cuisineTerm, setCuisineTerm] = useState();
  const [restaurants, setRestaurants] = useState();
  const [activities, setActivities] = useState();

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

  if (!restaurants || !activities) return null;

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
            <Restaurants restaurants={restaurants} />
            <Activities activities={activities} />
          </div>
        </div>
      </div>
      <div className="google-map-container">
        <img className="google-map-img" src={googleMap} alt="google maps" />
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