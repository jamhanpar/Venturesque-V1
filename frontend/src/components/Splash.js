import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../components/stylesheets/reset.css';
import './stylesheets/splash.css';

const Splash = () => {
    const [location, setLocation] = useState('');
    const [date, setDate] = useState("");
    const [friend, setFriend] = useState('');

    return (
      <div className="app-container">
        {/* <header>Header</header>
        <nav>Navbar</nav>
        <section>Section</section>
        <article>Article</article>
        <aside>Side Menu / Article</aside>
        <footer>Footer</footer> */}

        <section className="search-input">
            <form>
                <div>
                    <label htmlFor="location">The best first date near </label>  
                    <input type="text" id="location" placeholder='address, city, zipcode' onChange={() => setLocation()} value={location}/>
                </div>
                <div>
                    <input type="text" id="date" placeholder='date' onChange={() => setDate()} value={date}/>
                </div>
                <div>
                    <label htmlFor="friend">with </label>
                    <input type="text" id="friend's email" placeholder='friend' onChange={() => setFriend()} value={friend}/>
                </div>
            </form>
        </section>
      </div>
    );
}

// const msp = () => ({

// });

// const mdp = dispatch => ({
    
// });

export default connect(null, null)(Splash);