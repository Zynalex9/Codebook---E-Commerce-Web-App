import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { HomePage, ProductList } from '../pages'

function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='products' element={<ProductList/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes
