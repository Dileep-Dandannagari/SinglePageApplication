import React from 'react'
import { useLocation } from 'react-router-dom'
export default function ProductInfo() {
    const {state}=useLocation();
    const {brand, name, price, image_link,description}=state;
  return (
    <div className='information-container text-center w-75 m-auto mt-5'>
        <img src={image_link} alt='image'></img>
        <h1>Brand : {brand}</h1>
        <p>Name: {name}</p>
        <b>Price: ${price}</b>
        <p><h2>Description:</h2>{description}</p>
        <button className='btn btn-warning w-25 me-3'>AddToCart</button>
        <button className='btn btn-success w-25'>Buy Now</button>
    </div>
  )
}
