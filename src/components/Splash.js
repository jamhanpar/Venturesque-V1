import React, { useState } from 'react';
import { connect } from 'react-redux';
// import '../components/stylesheets/reset.css';
import './stylesheets/splash.css';

const Splash = () => {
    const [location, setLocation] = useState('');
    const [date, setDate] = useState("");
    const [friend, setFriend] = useState('');

    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    return (
      <div className="app-container">
        {/* <nav>Navbar</nav> */}
        <section className="search-input">
            <form>
                <div className="search-input-item">
                    <label htmlFor="location">The best first date near</label>    
                    <input type="text" id="location" placeholder='address, city, zipcode' onChange={() => setLocation()} value={location}/>
                </div>
                <div className="search-input-item">
                    <input type="text" id="date" placeholder='date' onChange={() => setDate()} value={date}/>
                </div>
                <div className="search-input-item">
                    <label htmlFor="friend">with </label>
                    <input type="text" id="friend's email" placeholder='friend' onChange={() => setFriend()} value={friend}/>
                </div>
                <div className="search-input-item">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </section>
        {/* <footer>Footer</footer> */}
      </div>
    );
}

// const msp = () => ({

// });

// const mdp = dispatch => ({
    
// });

export default connect(null, null)(Splash);