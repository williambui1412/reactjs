import { combineReducers } from 'redux';
import cartReducer from './cart';
import statusReducer from './status';

const rootReducer = combineReducers({
    cart: cartReducer,
    status: statusReducer,
});

export default rootReducer;