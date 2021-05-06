import React from 'react';
import { Search } from '../components/Search/Search';
import { SearchBar } from '../components/SearchBar';
import useReactRouter from 'use-react-router';

export const Results = ({ term, location}) => {
    const { history } = useReactRouter();

    function search(term, location) {
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        history.push(`/results?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`);
    }    

    return (
        <div>
            <Search term={term} location={location} />
            <SearchBar search={search} />
        </div>
    )
}