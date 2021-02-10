import React, { useEffect, Fragment } from "react";
import {
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import ReactPresentation from "components/ReactPresentation";
import VuePresentation from "components/VuePresentation";
import Home from "components/Home";

function App() {
  let datalayerObject = null;
  if (typeof window === 'undefined') {
    datalayerObject = [];
  } else {
    datalayerObject = window.dataLayer ? window.dataLayer : [];
  }
  let location = useLocation();

  useEffect(() => {
    // waiting 100 milliseconds for Helmet change the page title
    setTimeout(() => {
      datalayerObject.push({
        event: 'virtualPageview',
        vpvPage: location.pathname,
        vpvTitle: document.title,
      });
    }, 100);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <Fragment>
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
    </Fragment>
  );
}

export default App;
