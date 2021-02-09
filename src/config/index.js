const KEYS = [
  'NODE_ENV',
  'REACT_APP_SELF_ENV',
  'REACT_APP_GTM_ID',
  // another variables inside '.env' files
];

const config = Object.entries(process.env).reduce((acc, [key, value]) => {
  const keyName = KEYS.find((item) => key.includes(item));
  if (keyName) return { ...acc, [keyName]: value };
  return acc;
}, {});

export default { ...config };