import React from 'react';
import { connect } from "react-redux";
// import useReactRouter from 'use-react-router';
import { useParams } from 'react-router-dom';
import { Search } from '../components/Search/Search';
import { SearchBar } from '../components/SearchBar';
import { fetchRestaurants } from '../actions/yelp_actions';
import { fetchWeather, getUsername } from '../actions/weather_actions';
import { fetchUser } from '../actions/user_action';
import { useBusinessSearch } from '../hooks/yelp-api/useBusinessSearch';
import { SearchResults } from '../components/Search/SearchResults';

export const Results = ({ fetchUser }) => {
    // const { location } = useReactRouter();
    // console.log(location);
    // const params = new URLSearchParams(location.search);
    // const termParam = params.get('term');
    // const locationParam = params.get('location');
    const { term, location } = useParams();
    const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term, location);
    console.log(businesses);
    const firstBusiness = businesses[0]
    console.log(firstBusiness);

    debugger

    return (
        <div>
            {/* <p>{term}</p>
            <p>{location}</p> */}
            <button onClick={() => fetchRestaurants(term, location)}>Fetch Restaurants</button>
            <button onClick={() => fetchWeather()}>Fetch Weather</button>
            <button onClick={() => fetchUser()}>Fetch User</button>
            <SearchResults businesses={businesses} />
            {/* <SearchBar /> */}
        </div>
    )
}

// const msp = state => {
//     debugger
//     return {
//         user: state,
//     }
// };

// const mdp = (dispatch) => ({
//     fetchUser: () => dispatch(fetchUser()),
// });

export default connect(null, null)(Results);