import { useReducer } from "react";
import { ACTIONS } from "../constants";

const initialState = {
  count: 0,
  products: [],
};

const Reduce = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      return {
        ...state,
        products: [...state.products, action.payload],
        count: state.count + 1,
      };
    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
        count: state.count - 1,
      };
    default:
      return state;
  }
};

const useCart = () => {
  const [state, dispatch] = useReducer(Reduce, initialState);

  const addToCart = (product) =>
    dispatch({ type: ACTIONS.ADD_TO_CART, payload: product });
  const removeFromCart = (productId) =>
    dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: productId });

  return { state, addToCart, removeFromCart };
};

export default useCart;