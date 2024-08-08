import React, { useState } from "react";
import CartCard from "./CartCard";
import Checkout from "./Checkout"

export const CartList = () => {
  const [checkOut, setCheckOut] = useState(false)
  const productList = [
      {
        "id": 10001,
        "name": "Basics To Advanced In React",
        "overview": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.",
        "long_description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, vel ipsum maxime quam quia, quaerat tempore minus odio exercitationem illum et eos, quas ipsa aperiam magnam officiis libero expedita quo voluptas deleniti sit dolore? Praesentium tempora cumque facere consectetur quia, molestiae quam, accusamus eius corrupti laudantium aliquid! Tempore laudantium unde labore voluptates repellat, dignissimos aperiam ad ipsum laborum recusandae voluptatem non dolore. Reiciendis cum quo illum. Dolorem, molestiae corporis.",
        "price": 29,
        "poster": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
        "image_local": "/assets/images/10001.avif",
        "rating": 5,
        "in_stock": true,
        "size": 5,
        "best_seller": true
      },
      {
        "id": 10002,
        "name": "Django Framework for Beginners",
        "overview": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.",
        "long_description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, vel ipsum maxime quam quia, quaerat tempore minus odio exercitationem illum et eos, quas ipsa aperiam magnam officiis libero expedita quo voluptas deleniti sit dolore? Praesentium tempora cumque facere consectetur quia, molestiae quam, accusamus eius corrupti laudantium aliquid! Tempore laudantium unde labore voluptates repellat, dignissimos aperiam ad ipsum laborum recusandae voluptatem non dolore. Reiciendis cum quo illum. Dolorem, molestiae corporis.",
        "price": 19,
        "poster": "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
        "image_local": "/assets/images/10002.avif",
        "rating": 5,
        "in_stock": true,
        "size": 2,
        "best_seller": false
      },
      {
        "id": 10003,
        "name": "The Future of Design Systems",
        "overview": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error unde quisquam magni vel eligendi nam.",
        "long_description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta aut, vel ipsum maxime quam quia, quaerat tempore minus odio exercitationem illum et eos, quas ipsa aperiam magnam officiis libero expedita quo voluptas deleniti sit dolore? Praesentium tempora cumque facere consectetur quia, molestiae quam, accusamus eius corrupti laudantium aliquid! Tempore laudantium unde labore voluptates repellat, dignissimos aperiam ad ipsum laborum recusandae voluptatem non dolore. Reiciendis cum quo illum. Dolorem, molestiae corporis.",
        "price": 29,
        "poster": "https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40",
        "image_local": "/assets/images/10003.avif",
        "rating": 3,
        "in_stock": true,
        "size": 1,
        "best_seller": false
      },
  ]
    return (
      <>
        <section>
          <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
            My Cart (2)
          </p>
        </section>
        
        <section>
          {
            productList.map((product)=>(
              <CartCard product={product}/>
            ))
          }
        </section>
  
        <section className="max-w-4xl m-auto">
          <div className="flex flex-col p-2 border-b dark:border-slate-700 text-lg dark:text-slate-100">
            <p className="flex justify-between my-2">
              <span className="font-semibold">Total Amount:</span>
              <span>$99</span>
            </p>
          </div>
          <div className="text-right my-5">
            <button onClick={()=> setCheckOut(true)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-base px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700">
              PLACE ORDER <i className="ml-2 bi bi-arrow-right"></i>
            </button>
          </div>
        </section>
        {checkOut && <Checkout setCheckOut={setCheckOut}/>}
      </>
    )
  }

export default CartList;
