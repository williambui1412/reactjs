import { createStore } from "redux";
import rootReducer from "./reducer";
//import rootReducer from "./reducer";
//const rootReducer

const stateFromStorage = JSON.parse(localStorage.getItem('redux_store')) || {};

const store = createStore(rootReducer, stateFromStorage);

store.subscribe(() => {
    //console.log('store:', store.getState());
    const newState = store.getState();
    localStorage.setItem('redux_store', JSON.stringify(newState));
});

export default store;
