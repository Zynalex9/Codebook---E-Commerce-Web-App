import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { HomePage, ProductLists,ProductDetail } from '../pages'

function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='products' element={<ProductLists/>}/> 
        <Route path='products/:id' element={<ProductDetail/>}/> 
    </Routes>
    </>
  )
}

export default AllRoutes
