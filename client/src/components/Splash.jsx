import React, { useState } from 'react';
import useReactRouter from "use-react-router";
import './stylesheets/splash.scss';
import { useSearchContext } from '../hooks/contexts/searchContext';

//icons
import { FaSistrix } from 'react-icons/fa';

const Splash = () => {
    const searchCtx = useSearchContext();
    const [location, setLocation] = useState('');
    const [cuisine, setCuisine] = useState('Restaurant');
    // const [date, setDate] = useState('');
    // const [friend, setFriend] = useState('Vivian Chen');    

    const { history } = useReactRouter();

    function results(term, location) {
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        history.push(`/search/term=${urlEncodedTerm}&location=${urlEncodedLocation}`);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // on submission route to results page with location and default search parameter for now
        results(cuisine, location);
        searchCtx.setSearch(location);
    }

    return (
        <section className='search-input'>
            <form onSubmit={handleSubmit}>
                <div className='search-input-item'>
                    <label className='landing-page-text' htmlFor='location'>the best first date near </label>  
                    <input className='landing-page-input' type='text' id='location' placeholder='address, city, zipcode' onChange={(e) => setLocation(e.target.value)} value={location}/>
                    <p className='landing-page-symbol'>&</p>
                    <input className='landing-page-input' type='text' id='cuisine' placeholder='Restaurant' onChange={(e) => setCuisine(e.target.value)} value={cuisine}/>
                    <button className='generate-button' type='submit' onClick={handleSubmit}><FaSistrix className="search-icon"/></button>
                </div>
                <div className='submit-button-container'>
                </div>
            </form>
        </section>
    );
}

export default Splash;