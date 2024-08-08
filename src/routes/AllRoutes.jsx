import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { HomePage, ProductLists,ProductDetail, Login, Register } from '../pages'

function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='products' element={<ProductLists/>}/> 
        <Route path='products/:id' element={<ProductDetail/>}/> 
        <Route path='login' element={<Login/>}/> 
        <Route path='register' element={<Register/>}/> 
    </Routes>
    </>
  )
}

export default AllRoutes
