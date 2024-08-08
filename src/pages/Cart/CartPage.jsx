import React from 'react'
import CartEmpty from "./components/CartEmpty"
import CartList from "./components/CartList"
export const CartPage = () => {
const  cartLength = 1;
    return (
      <main>  
        {cartLength ? <CartList/> : <CartEmpty/> }
      </main>

    )
  }

export default CartPage
