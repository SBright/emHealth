import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import RouteWithLayout from './components/RouteWithLayout';
import './assets/css/style.css';
import { Normal as NormalLayout } from './layout';
import Home from './view/Home';
import Why from './view/Why';

function App() {
  return (
    <Router>
      <Switch>
          <RouteWithLayout
            component={Home}
            exact
            path='/'
            layout={NormalLayout}
          />
          <RouteWithLayout
            component={Why}
            exact
            path='/why-us'
            layout={NormalLayout}
          />
        </Switch>
    </Router>
  );
}

export default App;
