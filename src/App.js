import { Provider } from 'react-redux';
import { useRoutes } from 'hookrouter';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

// Components
import { Nav } from './components/Navbar';

// Pages
import Splash from './components/Splash.jsx';
import PageNotFound from './pages/PageNotFound';
import { LoginSignup } from './pages/LoginSignup';
import { Results } from './pages/Results';

const routes = {
  // '/Venturesque': () => <Splash />,
  '/auth/:toggle': ({ toggle }) => <LoginSignup toggle={ toggle } />,
  '/results?term=:term&location=:location': ({ term, location }) => <Results />
}

function App({ store }) {
  const routeMatch = useRoutes(routes);

  return (
    <Provider store={store} className="provider">
      <div className="App">
        <Nav />
        {/* {routeMatch || <PageNotFound />} */}
        {routeMatch}

        <Switch>
          <Route exact path='/' component={Splash}/>
          {/* <Route path='/results' component={Results}/> */}
        </Switch>
      </div>
    </Provider>
  );
}

export default App;