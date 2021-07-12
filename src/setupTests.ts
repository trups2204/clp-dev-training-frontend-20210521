// jest-dom adds custom jest matchers for asserting on DOM nodes.
// This allows you to do things like:
//   expect(element).toHaveTextContent(/react/i)
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import '@babel/polyfill';
import ReactDOM from 'react-dom';

// Lock Date.now() to always return a static date so that tests don't fail over time.
// Note that months are 0-index, so 2 is March.
Date.now = jest.fn(() => new Date(Date.UTC(2019, 2, 19)).valueOf());

// Setup required env
// ts: escape-hatch this because we're not going to redefine window
window['__ENV__'] = {
  NPM_PACKAGE_NAME: 'Test App',
  SERVER_API: '/api',
};

// disable console log spam
console.log = () => {};

// @ts-ignore
ReactDOM.createPortal = jest.fn((element, node) => element);
