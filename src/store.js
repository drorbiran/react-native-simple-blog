import {createStore, applyMiddleware} from 'redux';
import promise from 'redux-promise';
import rootReducer from './reducers';


const storeWithMiddleware = applyMiddleware(promise)(createStore);
export const store = storeWithMiddleware(rootReducer);
