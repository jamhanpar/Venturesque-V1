import React, { useState } from 'react';
import { connect } from 'react-redux';

const Splash = () => {
    return (
        <div class='app-container'>
            <header>Header</header>
            <nav>Navbar</nav>
            <section>Section</section>
            <article>Article</article>
            <aside>Side Menu / Article</aside>
            <footer>Footer</footer>
        </div>
    )
}

const msp = () => ({

});

const mdp = dispatch => ({
    
});

export default connect(null, null)(Splash);