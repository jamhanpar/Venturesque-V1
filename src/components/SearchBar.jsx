import React from 'react';

export function SearchBar() {
    return (
        <div>
            <i className="fas fa-search"></i>
            <input type="text" placeholder="Search"/>
            <input type="text" placeholder="Location"/>
        </div>
    )
}