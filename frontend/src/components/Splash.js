import React, { useState } from 'react';
import { connect } from 'react-redux';
import '../components/stylesheets/reset.css';
import './stylesheets/splash.css';

const Splash = () => {
    const [location, setLocation] = useState('');
    const [date, setDate] = useState("");
    const [friend, setFriend] = useState('');

    return (
      <div class="app-container">
        {/* <header>Header</header>
        <nav>Navbar</nav>
        <section>Section</section>
        <article>Article</article>
        <aside>Side Menu / Article</aside>
        <footer>Footer</footer> */}

        <section class="search-input">
            <form>
                <div>
                    <label for="location">The best first date near </label>  
                    <input type="text" id="location" placeholder='address, city, zipcode' onChange={() => setLocation()}/>
                </div>
                <div>
                    <input type="text" id="date" placeholder='date' onChange={() => setDate()}/>
                </div>
                <div>
                    <label for="friend">with </label>
                    <input type="text" id="friend" placeholder='friend' onChange={() => setFriend()}/>
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