import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useReactRouter from "use-react-router";
import { connect } from "react-redux";

import { fetchUser } from '../../actions/user_actions';
import { useSearchContext } from '../../hooks/contexts/searchContext';
import { fetchRestaurants } from '../../util/apis/restaurants';
import { fetchActivities } from '../../util/apis/activities';
import { SearchResult } from '../Search/SearchResult';
import { FaSearch, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import googleMap from "../../assets/img/temp-google-map.png";
import "../stylesheets/results.scss";

import { sortBestRestaurant } from '../../util/algorithms/sortingAlgo';

const Results = (props) => {
    const searchCtx = useSearchContext();
    const [locationTerm, setLocationTerm] = useState();
    const [cuisine, setCuisine] = useState();
    const [restaurants, setRestaurants] = useState();
    const [activities, setActivities] = useState();
    
    let { term, location } = useParams(); 
    const { history } = useReactRouter();
    
    // let [bestRestaurant, setBestRestaurant] = useState();
    let [currentRestaurantIdx, setCurrentRestaurantIdx] = useState(0);
    let [currentActivityIdx, setCurrentActivityIdx] = useState(0);
    
    useEffect(() => {
        setLocationTerm(location);
        setCuisine(term);

        // get restaurants
        fetchRestaurants(searchCtx.search, term)
            .then(res => {
                setRestaurants(res);

                // get activities
                fetchActivities(res[0].coordinates.latitude, res[0].coordinates.longitude)
                    .then(res => {
                        setActivities(res)
                    })
        })
        // eslint-disable-next-line
    }, [searchCtx.search]);
    
    if (!restaurants || !activities) return null;
    
    const sortedRestaurants = restaurants.sort((a,b) => {
        let aValue = (a.user_ratings_total < 15 || a.rating === 5) ? 0 : a.rating + a.user_ratings_total/100000
        let bValue = (b.user_ratings_total < 15 || a.rating === 5) ? 0 : b.rating + b.user_ratings_total/100000
        return bValue - aValue
    })

    const sortedActivities = activities.sort((a,b) => {
        let aValue = (a.review_count < 15 || a.rating === 5) ? 0 : a.rating + a.review_count/100000
        let bValue = (b.review_count < 15 || a.rating === 5) ? 0 : b.rating + b.review_count/100000
        return bValue - aValue
    })

    const bestRestaurant = sortedRestaurants[currentRestaurantIdx];
    const bestActivity = sortedActivities[currentActivityIdx];

    const results = (term, location) => {
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        history.push(`/search/term=${urlEncodedTerm}&location=${urlEncodedLocation}`);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        results(cuisine, locationTerm);
        searchCtx.setSearch(locationTerm);
    }

    return (
        <div>
            <div className="search-results-container">
                <div className="results-search-container">
                    <div className="search-info-container">
                        <h1 className="results-search-container-title">The Best Date</h1>
                        <form className="search-form" onSubmit={handleSubmit}>
                            <span className="results-text">in</span>
                            <input className="results-search-input" type="text" value={locationTerm} onChange={(e) => setLocationTerm(e.target.value)} />
                            <input className="results-search-input" type="text" value={cuisine} onChange={(e) => setCuisine(e.target.value)} />
                            <button className="search-icon-btn" type="submit"><FaSearch className="search-icon" /></button>
                        </form>
                    </div>
                    <div className="restaurant-activity-container">
                        <div className="search-results">
                            <FaAngleLeft onClick={() => setCurrentRestaurantIdx(currentRestaurantIdx - 1)}/>
                            <SearchResult restaurant={bestRestaurant} type='restaurant' />
                            {currentRestaurantIdx}
                            <FaAngleRight onClick={() => setCurrentRestaurantIdx(currentRestaurantIdx + 1)} />
                        </div>
                        <div className="search-results">
                            <FaAngleLeft onClick={() => setCurrentActivityIdx(currentActivityIdx - 1)}/>
                            <SearchResult activity={bestActivity} type='activity'/>
                            {currentActivityIdx}
                            <FaAngleRight onClick={() => setCurrentActivityIdx(currentActivityIdx + 1)} />
                        </div>
                    </div>
                </div>
                <div className="google-map-container">
                    <img className="google-map-img" src={googleMap} alt="google maps" />
                </div>
            </div>
        </div>
    )
}

Results.defaultProps = {
    location: 'hoboken',
    cuisine: 'restaurant',
}

// const msp = () => ({});

const mdp = dispatch => ({
    fetchUser: () => dispatch(fetchUser())
});

export default connect(null, mdp)(Results);