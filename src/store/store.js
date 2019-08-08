import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// reducers
import formsReducer from '../redux/formsReducer';

const rootReducer = combineReducers({
  forms: formsReducer,
});

const middlewares = applyMiddleware(thunk);

const enhancer = composeWithDevTools(middlewares);

export const store = createStore(rootReducer, enhancer);

export default store;
