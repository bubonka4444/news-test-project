import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import newsReducer from './newsReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  news: newsReducer,
  users: usersReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;