import React, { Fragment, useEffect } from 'react';
import gtm from 'utils/gtm';

const Root = ({ children }) => {
  useEffect(() => {
    gtm();
  }, []);

  return (
    <Fragment>
      {children}
    </Fragment>
  );
};

export default Root;