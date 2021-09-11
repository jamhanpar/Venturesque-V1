import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { SearchProvider } from './contexts/searchContext';
import { AuthProvider } from './contexts/AuthContext';
import './App.scss';

// Components
import { Nav } from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './components/pages/Home';
import Testing from './components/pages/Testing';
import { LoginSignup } from './components/pages/LoginSignup';
import { LoginSignupComponent } from "./components/pages/LoginSignupComponent";
import Results from './components/pages/Results';
import About from './components/pages/About';

export const App = ({ store }) => (
  <div className="App">
    <Provider store={store}>
      <Nav />
      <Switch>
        <AuthProvider>
          <SearchProvider>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/testing" component={Testing} />
            <Route
              path="/search/term=:term&location=:location"
              component={Results}
            />
          </SearchProvider>
          <Route path="/auth/:toggle" component={LoginSignup} />
          <Route exact path="/:toggle" component={LoginSignupComponent} />
        </AuthProvider>
      </Switch>
      <Footer />
    </Provider>
  </div>
);