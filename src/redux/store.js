// Только добавь редьюсер
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import reduser from './reducers';

const composeEnhancers = composeWithDevTools({ name: 'GROG_STORE' });

export const store = createStore(reduser, { names: [] }, composeEnhancers(applyMiddleware()));

if (window.Cypress) {
  window.store = store;
}
