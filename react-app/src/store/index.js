import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import productReducer from './product';
import cartItemReducer from './cartproduct';
import cartReducer from './cart';
import orderReducer from './order';
import orderItemReducer from './orderitem';

const rootReducer = combineReducers({
  session,
  product:productReducer,
  cartProducts:cartItemReducer,
  cart: cartReducer,
  order:orderReducer,
  orderItems: orderItemReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
