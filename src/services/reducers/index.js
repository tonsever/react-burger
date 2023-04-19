import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  /*   cart: cartReducer,
    delivery: deliveryReducer,
    checkout: checkoutReducer */
});