import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import RouteWithLayout from './components/RouteWithLayout';
import './assets/css/style.css';
import { Normal as NormalLayout } from './layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './view/Home';
import Why from './view/Why';
import New from './view/New';

function App() {
  return (
    <Router>
      <ScrollToTop />
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
          <RouteWithLayout
            component={New}
            exact
            path='/emcalss'
            layout={NormalLayout}
          />
        </Switch>
    </Router>
  );
}

export default App;
