import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import thunk from 'redux-thunk';
//import rootReducer from "./reducer";
//const rootReducer

const stateFromStorage = JSON.parse(localStorage.getItem('redux_store')) || {};
const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, stateFromStorage, middleware );

store.subscribe(() => {
    //console.log('store:', store.getState());
    const newState = store.getState();
    localStorage.setItem('redux_store', JSON.stringify(newState));
});

export default store;
