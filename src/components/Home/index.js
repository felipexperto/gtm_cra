import logo from './logo.svg';
import './style.css';

function ReactPresentation() {
  return (
    <div className="align-center">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Home
        </p>
      </header>
    </div>
  );
}

export default ReactPresentation;