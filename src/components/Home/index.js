import config from 'config';
import logo from './logo.svg';
import './style.css';

function Home() {
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
        <p>
          Ambiente: {config.REACT_APP_SELF_ENV}
          <br/>
          GTM: {config.REACT_APP_GTM_ID}
        </p>
      </header>
    </div>
  );
}

export default Home;