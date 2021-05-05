import React from 'react';
import { SearchResult } from './SearchResult';

export function SearchResults(props) {
    console.log(props.businesses);

    if(!props.businesses ||  !props.businesses.length) return (<div></div>);

    const searchResults = props.businesses.map(business => <SearchResult key={business.id} business={business} />)
    
    return (
        <div>
            {searchResults}
        </div>
    )
}