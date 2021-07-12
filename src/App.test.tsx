import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { initRedux } from './redux';
import { App } from './App';

test('renders heading on default page', (done) => {
  const { store } = initRedux('test');

  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const headingText = getByText(/Welcome/i);
  expect(headingText).toBeInTheDocument();
  done();
});
