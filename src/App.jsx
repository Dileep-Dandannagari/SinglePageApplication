import React, { useEffect, useState } from 'react'
import Login from './components/Login/Login'
import Header from './components/Header/Header'
import "./App.css"
import { Home } from './components/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './components/Products/Products'
import SignUp from "./components/SignUp/SignUp"
import NotFound from "./components/NotFound/NotFound"
import axios from 'axios'
import ProductInfo from './components/ProductInfo/ProductInfo'
export default function App() {
  const [productContainer, setProductCotainer]=useState([]);
  useEffect(()=>{
    const fetchData= async ()=>{
      const data=await axios.get("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
      setProductCotainer(data.data)
    }
    fetchData();
  },[]);
  
  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/products' element={<Products products={productContainer}/>}/>
      <Route path='/products/:id' element={<ProductInfo/>}/>
      <Route path="*" element={<NotFound/>}/ > 
     </Routes>
     </BrowserRouter>
    </>
  )
}
