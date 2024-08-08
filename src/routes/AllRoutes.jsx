import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { HomePage, ProductLists,ProductDetail, Login, Register, CartPage } from '../pages'
import ProtectRoute from './ProtectRoute'

function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='products' element={<ProductLists/>}/> 
        <Route path='products/:id' element={<ProductDetail/>}/> 
        <Route path='login' element={<Login/>}/> 
        <Route path='register' element={<Register/>}/> 
        <Route path='cart' element={<ProtectRoute><CartPage/></ProtectRoute>}/> 
    </Routes>
    </>
  )
}

export default AllRoutes
