import { Helmet } from "react-helmet";

import logo from './logo.svg';
import './style.css';

function ReactPresentation() {
  return (
    <div className="align-center">
      <Helmet>
        <title>Vue</title>
      </Helmet>
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="link"
          href="https://vuejs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Vue
        </a>
      </header>
    </div>
  );
}

export default ReactPresentation;