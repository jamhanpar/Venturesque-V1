import { Provider } from 'react-redux';
// import { HashRouter, Switch, Route } from 'react-router-dom';
import { useRoutes } from 'hookrouter';
import './App.css';

import { Nav } from './components/Navbar';
import { Home } from './pages/Home';
import Splash from './components/Splash.jsx';
import { LoginSignup } from './pages/LoginSignup';
// import Results from './components/Results';
import PageNotFound from './pages/PageNotFound';

const routes = {
  '/': () => <Splash />,
  '/auth/:toggle': ({ toggle }) => <LoginSignup toggle={ toggle } />,
  // '/results': () => <Results />
}

function App({ store }) {
  const routeMatch = useRoutes(routes);

  return (
    <Provider store={store} className="provider">
      <div className="App">
        <Nav />
        {routeMatch || <PageNotFound />}
      </div>
    </Provider>
  );
}

export default App;