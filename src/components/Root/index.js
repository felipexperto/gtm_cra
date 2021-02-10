import React, { useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import gtm from 'utils/gtm';

const Root = ({ children }) => {
  useEffect(() => {
    gtm();
  }, []);

  return (
    <Router>
      {children}
    </Router>
  );
};

export default Root;