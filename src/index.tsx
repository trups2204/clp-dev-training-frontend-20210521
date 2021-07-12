// See https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill#polyfilling-other-language-features
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { initRedux } from './redux';
import { App } from './App';
import { getServerEnvVar } from './utils';
import { SERVER_ENV_VARIABLE } from './constants';
import './index.css';

const npmPackageName = getServerEnvVar(SERVER_ENV_VARIABLE.NPM_PACKAGE_NAME);
if (!npmPackageName) throw new Error('No npm_package_name __ENV__ set');

const rootElement: HTMLElement | null = document.getElementById('root');

function startApp(): void {
  const { store, persistor } = initRedux(npmPackageName);

  ReactDOM.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>,
    rootElement
  );
}

startApp();
