import React, { useState } from 'react';
import ProductCard from '../component/ProductCard';

const Cart = () => {

  const [productData, setProductData] = useState([
    {
      name : "Paint",
      price : 99999
    },
    {
      name : "Blazer",
      price : 99
    },
    {
      name : "Shoes",
      price : 999
    },
    {
      name : "Tie",
      price : 149
    }
  ])

  return (
    <div style={{padding: '10px'}}>
      {productData.map((product, index)=><ProductCard key={index} name={product.name} price={product.price}/>)}
    </div>
  )
}

export default Cart