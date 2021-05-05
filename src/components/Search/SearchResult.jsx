import React from 'react';
import { SearchResult } from './SearchResult';

export function SearchResult(props) {    
    return (
        <div>
            <div>{props.business.name}</div>
        </div>
    )
}