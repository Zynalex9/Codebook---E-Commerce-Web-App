import React from "react";
import CartEmpty from "./components/CartEmpty";
import CartList from "./components/CartList";
import { useCart } from "../../context/CartContext";
export const CartPage = () => {
  const cartLength = 1;
  const { cartList } = useCart();
  return <main>{cartList.length ? <CartList /> : <CartEmpty />}</main>;
};

export default CartPage;
