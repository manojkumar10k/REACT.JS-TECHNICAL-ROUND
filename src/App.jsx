import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Footer from './Component/Footer'
import Product from './Product'
import Contact from './Contact'
import View from './View'
import Registration from './Registration'
import Login from './Login'
import Profile from './Profile'
import Cart from './Cart'

function App() {

  return (
    <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/product' element={<Product/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/view/:viewId' element={<View/>}></Route>
    <Route path='/registration' element={<Registration/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/profile' element={<Profile/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
    </>
  )
}

export default App
