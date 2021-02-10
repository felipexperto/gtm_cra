import React, { useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import config from 'config';
import gtm from 'utils/gtm';

const Root = ({ children }) => {
  useEffect(() => {
    if (config.REACT_APP_SELF_ENV !== 'test') gtm();
  }, []);

  return (
    <Router>
      {children}
    </Router>
  );
};

export default Root;