import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUser } from '../../actions/user_actions';
import { SearchResult } from '../Search/SearchResult';
import googleMap from "../../assets/img/temp-google-map.png";
import { connect } from "react-redux";
import "../stylesheets/results.scss";
import { useSearchContext } from '../../hooks/contexts/searchContext';
import { fetchRestaurants } from '../../util/restaurants';
import { fetchActivities } from '../../util/activities';

const Results = (props) => {
    const searchCtx = useSearchContext();
    const [restaurants, setRestaurants] = useState();
    const { term, location } = useParams();
    const [date, setDate] = useState('');
    const [activities, setActivities] = useState();
    
    useEffect(() => {
        fetchRestaurants(searchCtx.search, 'restaurant')
            .then(res => {
                setRestaurants(res);
                fetchActivities(res[0].coordinates.latitude, res[0].coordinates.longitude)
                    .then(res => {
                        setActivities(res)
                    })
            })
    }, []);

    if (!restaurants || !activities) return null
    
    const sortedRestaurants = restaurants.sort((a,b) => {
        let aValue = (a.user_ratings_total < 15 || a.rating === 5) ? 0 : a.rating + a.user_ratings_total/100000
        let bValue = (b.user_ratings_total < 15 || a.rating === 5) ? 0 : b.rating + b.user_ratings_total/100000
        return bValue - aValue
    })

    // Restaurant Index
    // const restaurantIndex = sortedRestaurants.map((restaurant, i) => {
    //     return <li key={i}>{restaurant.name}</li>;
    // });

    const sortedActivities = activities.sort((a,b) => {
        let aValue = (a.review_count < 15 || a.rating === 5) ? 0 : a.rating + a.review_count/100000
        let bValue = (b.review_count < 15 || a.rating === 5) ? 0 : b.rating + b.review_count/100000
        return bValue - aValue
    })

    const bestRestaurant = sortedRestaurants[0];
    const bestActivity = sortedActivities[0];

    // sort by highest rated and most reviewed
    return (
        <div>
            <div className="search-results-container">
                <div className="results-search-container">
                    <div className="search-info-container">
                        <h1 className="results-search-container-title">The Best Date</h1>
                        <form className="search-form" >
                            <span className="results-text">in</span>
                            <input className="results-search-input" type="text" placeholder={location} />
                            {/* <span className="results-text">with</span>
                            <input className="results-search-input" type="text" placeholder="friend" /> */}
                            {/* <span className="results-text">on</span>
                            <input className="results-search-input" type="text" placeholder={date}/> */}
                            <i className="fas fa-search"></i>
                        </form>
                        {/* <div className="results-container">
                            <SearchResults businesses={businesses.slice(0, 1)} />
                            <span className="separator">&</span>
                            <SearchResults businesses={businesses.slice(0, 1)} />
                        </div> */}
                    </div>
                    <div className="restaurant-activity-container">
                        <div className="search-results">
                            <SearchResult restaurant={bestRestaurant} type='restaurant'/>
                        </div>
                        <div className="search-results">
                            <SearchResult activity={bestActivity} type='activity'/>
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

// const msp = () => ({});

const mdp = dispatch => ({
    fetchUser: () => dispatch(fetchUser())
});

export default connect(null, mdp)(Results);