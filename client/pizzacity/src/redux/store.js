import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { dishesReducer } from './reducer';

//Root Reducer
const rootReducer = combineReducers({
  dishes: dishesReducer,
});

//Redux Dev Tool
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Enhancer
const enhancer = composeEnhancers(applyMiddleware(thunk));

//Store
export const store = createStore(rootReducer, enhancer);
