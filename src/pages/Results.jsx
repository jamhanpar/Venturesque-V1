import React from 'react';
import { Search } from "../components/Search/Search";

export const Results = ({ term, location}) => {
    return (
        <div>
            <Search term={term} location={location}/>
        </div>
    )
}