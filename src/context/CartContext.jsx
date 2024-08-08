import { createContext, useContext, useReducer } from "react";
import { CartReducer } from "../reducer/CartReducer";

const initialState = {
  cartList: [],
  total: 0,
};
export const CartContext = createContext(initialState);
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  function addToCart(product) {
    const updatedList = state.cartList.concat(product);
    const updatedTotal = state.total + product.total;
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedList,
        total: updatedTotal,
      },
    });
  }
  function removeFromCart(product) {
    const updatedList = state.cartList.filter((item) => item.id !== product.id);
    const updatedTotal = state.total - product.total;

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedList,
        total: updatedTotal,
      },
    });
  }
  function clearCart() {
    dispatch({
      type: "CLEAR_CART",
      payload: {
        products: [],
        total: 0,
      },
    });
  }
  const value = {
    cartList: state.cartList,
    total: state.total,
    addToCart,
    removeFromCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
