import React from 'react'
import { Link } from 'react-router-dom';

function Products({products}) {
  const container=products.map((product)=>{
    let {id, brand, name, price, image_link}=product;
    return (
      <div className="sub-container" key={id}>
        <img src={image_link} alt='Image'/>
        <div className="details">
          <h3>Brand:{brand}</h3>
          <p><b>Name</b>:{name}</p>
          <b>Price: ${price}</b><br></br>
          <Link to={`/products/${id}`} state={product}><button  className='btn btn-success mt-4'>View Details</button></Link>
        </div>
      </div>
    
    )
  })
  return (
    <div className='products-container'>
      {container}
    </div>
    )
}

export default Products;