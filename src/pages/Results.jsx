import React from 'react';
// import useReactRouter from 'use-react-router';
import { useParams } from 'react-router-dom';
import { Search } from '../components/Search/Search';
import { SearchBar } from '../components/SearchBar';
import { fetchRestaurants } from "../actions/yelp_actions";

export const Results = () => {
    // const { location } = useReactRouter();
    // console.log(location);
    // const params = new URLSearchParams(location.search);
    // const termParam = params.get('term');
    // const locationParam = params.get('location');
    const { term, location } = useParams();

    console.log(`${process.env.YELP_API_KEY}`);    

    return (
        <div>
            <p>{term}</p>
            <p>{location}</p>
            <button onClick={() => fetchRestaurants(term, location)}>Fetch Restaurants</button>
            <h1>Hello</h1>
            <Search />
            <SearchBar />
            {/* <p>{termParam}</p>
            <p>{locationParam}</p> */}
        </div>
    )
}