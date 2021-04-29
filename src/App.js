import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Splash from './components/Splash';

function App({ store }) {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <Switch>
            <Route path='/' component={Splash}/>
          </Switch>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;