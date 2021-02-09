import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ReactPresentation from 'components/ReactPresentation';
import VuePresentation from 'components/VuePresentation';
import Home from 'components/Home';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/vue">Vue</Link>
            </li>
            <li>
              <Link to="/react">React</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/react">
            <ReactPresentation />
          </Route>
          <Route path="/vue">
            <VuePresentation />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
