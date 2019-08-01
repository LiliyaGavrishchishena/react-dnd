import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// reducers
import reducer from '../redux/reducer';

const rootReducer = combineReducers({
  forms: reducer,
});

const middlewares = applyMiddleware(thunk);

const enhancer = composeWithDevTools(middlewares);

export const store = createStore(rootReducer, enhancer);

export default store;
