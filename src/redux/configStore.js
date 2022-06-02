import {createStore, combineReducers, applyMiddleware, compose} from"redux";
import thunk from 'redux-thunk';
import WordList from "./modules/WordList";

const  middlewares= [thunk];
const rootReducer = combineReducers({WordList})
const enhancer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, enhancer);

export default store;