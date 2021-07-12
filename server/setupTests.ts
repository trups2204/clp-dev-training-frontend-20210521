import '@babel/polyfill';

process.env.API_BASEPATH = 'dev.devlabs';

// Lock Date.now() to always return a static date so that tests don't fail over time.
// Note that months are 0-index, so 2 is March.
Date.now = jest.fn(() => new Date(Date.UTC(2019, 2, 19)).valueOf());

// Setup required env
// ts: escape-hatch this because we're not going to redefine window
global['__ENV__'] = {
  SERVER_API: '/api/',
};

// disable console log spam
console.log = () => {};

