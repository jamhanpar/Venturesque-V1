import { Provider } from 'react-redux';
import { useRoutes } from 'hookrouter';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

// Components
import { Nav } from './components/Navbar';

// Pages
import Splash from './components/Splash.jsx';
// import PageNotFound from './pages/PageNotFound';
import { LoginSignup } from './pages/LoginSignup';
import { Results } from './pages/Results';

const routes = {
  // '/Venturesque': () => <Splash />,
  '/auth/:toggle': ({ toggle }) => <LoginSignup toggle={ toggle } />,
  '/search?term=:term&location=:location': ({ term, location }) => <Results term={ term } location={ location } />
}

function App({ store }) {
  // const routeMatch = useRoutes(routes);

  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
        {/* {routeMatch || <PageNotFound />} */}
        {/* {routeMatch} */}

        <Switch>
          <Route exact path='/' component={Splash}/>
          <Route path='/search/term=:term&location=:location' component={Results}/>
          <Route path='/results' component={Results}/>
          <Route path='/auth/:toggle' component={LoginSignup}/>
        </Switch>
      </div>
    </Provider>
  );
}

export default App;