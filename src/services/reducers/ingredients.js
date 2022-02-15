/* import { cartReducer } from './cart';
import { deliveryReducer } from './delivery';
import { checkoutReducer } from './checkout';
import { NEXT_STEP, PREVIOUS_STEP } from '../actions'; */
import {
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  ADD_CONSTRUCTOR_ELEMENT,
  DELETE_CONSTRUCTOR_ELEMENT,
  ADD_INGREDIENTS_DETAILS,
  DELETE_INGREDIENTS_DETAILS,
  GET_ORDER_NUMBER_REQUEST,
  GET_ORDER_NUMBER_SUCCESS,
  GET_ORDER_NUMBER_FAILED,
} from '../actions/ingredients';


const defaultState = {
  ingredients: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  ingredientsConstrucor: [],
  ingredient: {},
  order: {}
}


export const ingredientsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST: {
      return {
        ...state,
        ingredientsRequest: true
      };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return { ...state, ingredientsFailed: false, ingredients: action.ingredients, ingredientsRequest: false };
    }
    case GET_INGREDIENTS_FAILED: {
      return { ...state, ingredientsFailed: true, ingredientsRequest: false };
    }
    default: {
      return state;
    }
  }
};

