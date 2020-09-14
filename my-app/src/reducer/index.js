import { combineReducers } from 'redux';
import cartReducer from './cart';
import statusReducer from './status';
import blogReducer from './blog';
import counter from './counter';
import ListReducer from './list';

const rootReducer = combineReducers({
    cart: cartReducer,
    status: statusReducer,
    blog: blogReducer,
    count: counter,
    List: ListReducer, 
});

export default rootReducer;