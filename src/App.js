import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

// Components
import { Nav } from './components/Navbar';

// Pages
import Splash from './components/Splash.jsx';
import { LoginSignup } from './pages/LoginSignup';
import Results from './pages/Results';

export const App = ({ store }) => (
  <div className="App">
    <Provider store={store}>
      <Nav />
      <Switch>
        <Route exact path='/' component={Splash}/>
        <Route path='/search/term=:term&location=:location' component={Results}/>
        <Route path='/results' component={Results}/>
        <Route path='/auth/:toggle' component={LoginSignup}/>
      </Switch>
    </Provider>
  </div>
);
