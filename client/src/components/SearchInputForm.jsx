import React from 'react'

import { FaSearch } from "react-icons/fa";

const SearchInputForm = (props) => {
    const {handleSubmit, locationTerm, cuisineTerm, setLocationTerm, setCuisineTerm} = props;

    return (
        <div className="search-info-container">
            <h1 className="results-search-container-title">The Best Date</h1>
            <form className="search-form" onSubmit={handleSubmit}>
                <span className="results-text">in</span>
                <input className="results-search-input" type="text" value={locationTerm} onChange={(e) => setLocationTerm(e.target.value)} />
                <input className="results-search-input" type="text" value={cuisineTerm} onChange={(e) => setCuisineTerm(e.target.value)} />
                <button className="search-icon-btn" type="submit"><FaSearch className="search-icon" /></button>
            </form>
        </div>
    )
}

export default SearchInputForm;
