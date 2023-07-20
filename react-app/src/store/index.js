import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import productReducer from './product';
import cartItemReducer from './cartproduct';
import orderReducer from './order';
import orderItemReducer from './orderitem';
import reviewReducer from './review';
import catagoryReducer from './catagories';

const rootReducer = combineReducers({
  session,
  product:productReducer,
  cartProducts:cartItemReducer,
  order:orderReducer,
  orderItems: orderItemReducer,
  review: reviewReducer,
  catagory: catagoryReducer
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
