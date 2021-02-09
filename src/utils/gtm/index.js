import config from 'config';

// eslint-disable-next-line no-console
const gtm = () => {
  (function (w, d, s, l, i) {
    if (w) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js',
      });
      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s);
      const dl = l !== 'dataLayer' ? `&l=${l}` : '';
      j.async = true;
      j.src = `https://www.googletagmanager.com/gtm.js?id=${i}${dl}`;
      f.parentNode.insertBefore(j, f);
    }
  })(window, document, 'script', 'dataLayer', config.REACT_APP_GTM_ID);
};

export default gtm;