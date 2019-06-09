import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';

export const configureStore = () => {

  const store = createStore(rootReducer,composeWithDevTools());

  return store;
};
