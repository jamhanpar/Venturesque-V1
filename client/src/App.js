import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { SearchProvider } from './hooks/contexts/searchContext';
import './App.scss';

// Components
import { Nav } from './components/Navbar';

// Pages
import Home from './components/pages/Home';
import Testing from './components/pages/Testing';
import { LoginSignup } from './components/pages/LoginSignup';
import Results from './components/pages/Results';

export const App = ({ store }) => (
  <div className="App">
    <Provider store={store}>
      <Nav />
      <Switch>
          <SearchProvider>
            <Route exact path='/' component={Home}/>
            <Route path='/testing' component={Testing}/>
            <Route path='/search/term=:term&location=:location' component={Results}/>
          </SearchProvider>
        <Route path='/auth/:toggle' component={LoginSignup}/>
      </Switch>
    </Provider>
  </div>
);