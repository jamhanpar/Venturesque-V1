import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { useRoutes } from 'hookrouter';
import './App.css';

import Splash from './components/Splash';
import LoginSignup from './components/LoginSignup';

function App({ store }) {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <Switch>
            <Route path="/home" component={Splash} />
            <Route path="/login" component={LoginSignup} />
            {/* <Route path="/signup" component={LoginSignup} /> */}
          </Switch>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;