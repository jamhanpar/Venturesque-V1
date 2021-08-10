import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

// Components
import { Nav } from './components/Navbar';

// Pages
import Home from './components/pages/Home';
import Splash from './components/Splash';
import { LoginSignup } from './components/pages/LoginSignup';
import Results from './components/pages/Results';

export const App = ({ store }) => (
  <div className="App">
    <Provider store={store}>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/search/term=:term&location=:location' component={Results}/>
        <Route path='/results' component={Results}/>
        <Route path='/auth/:toggle' component={LoginSignup}/>
      </Switch>
    </Provider>
  </div>
);
