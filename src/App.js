import { Provider } from 'react-redux';
import { useRoutes } from 'hookrouter';
import './App.scss';

// Components
import { Nav } from './components/Navbar';

// Pages
import Splash from './components/Splash.jsx';
import PageNotFound from './pages/PageNotFound';
import { LoginSignup } from './pages/LoginSignup';
import { Results } from './pages/Results';

const routes = {
  '/home': () => <Splash />,
  '/auth/:toggle': ({ toggle }) => <LoginSignup toggle={ toggle } />,
  '/results': () => <Results />
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