import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// eslint-disable-next-line import/no-default-export
export default applyMiddleware(thunk);
