import React from 'react';
import useReactRouter from 'use-react-router';
import { SearchResults } from './SearchResults';
import { useBusinessSearch } from '../../hooks/yelp-api/useBusinessSearch';

export function Search(props) {
    // what does line 7 do?
    const { location } = useReactRouter();
    const params = new URLSearchParams(location.search);
    const term = params.get('find_desc');
    const locationParam = params.get('find_loc');
    const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(props.term, props.location);

    return (
        <div>
            <SearchResults />
        </div>
    )
}