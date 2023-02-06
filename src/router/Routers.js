import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from "./../pages/Home"
import Login from "./../pages/Login"
import Register from "./../pages/Register"
import Tours from "./../pages/Tour"
import TourDetails from "./../pages/TourDetails"
import SearchResultList from "./../pages/SearchResultList"
import Payment from '../pages/Payment'
import About from '../pages/About'


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home'/>}  />
        <Route path='/home' element={<Home/>}  />
        <Route path='/login' element={<Login/>}  />
        <Route path='/register' element={<Register/>}  />
        <Route path='/tours' element={<Tours/>}  />
        <Route path='/tours/:id' element={<TourDetails/>}  />
        <Route path='/payment' element={<Payment/>}  />
        <Route path='/about' element={<About/>}  />
        <Route path='/tours/search' element={<SearchResultList/>}  />
    </Routes>
  )
}

export default Routers;