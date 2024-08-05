import { Routes, Route } from 'react-router-dom'
import React from 'react'
import { HomePage, ProductLists } from '../pages'

function AllRoutes() {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='products' element={<ProductLists/>}/>
    </Routes>
    </>
  )
}

export default AllRoutes
