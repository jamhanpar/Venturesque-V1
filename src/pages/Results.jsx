import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchRestaurants } from '../actions/yelp_actions';
import { fetchWeather } from '../actions/weather_action';
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

    return (
        <div>
            {/* <p>{term}</p>
            <p>{location}</p> */}
            <button onClick={() => fetchRestaurants(term, location)}>Fetch Restaurants</button>
            <button onClick={() => fetchWeather()}>Fetch Weather</button>
            <button onClick={() => fetchUser()}>Fetch User</button>
            <SearchResults businesses={businesses.slice(0, 1)} />
            {/* <SearchBar /> */}
        </div>
    )
}