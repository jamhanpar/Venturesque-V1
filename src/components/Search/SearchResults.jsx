import React from 'react';
import { SearchResult } from './SearchResult';

export function SearchResults(props) {
    if(!props.businesses ||  !props.businesses.length) return (<div></div>);

    const searchResults = props.businesses.map(business => <SearchResult key={business.id} business={businesses} />)
    
    return (
        <div>
            {searchResults}
        </div>
    )
}