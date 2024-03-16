import React, { useState, useCallback, useEffect } from 'react';
import DisplayPriceCard from './DisplayPriceCard';

const ProductCard = ({name, price}) => {
  
  const [qty, setQty] = useState(1)

  const [size, setSize] = useState("s");
  
  const totalPrice = useCallback(()=>{
    return qty * price
  },[qty, price])
    
  return (
    <div style={{width : '40vw', backgroundColor: "white", minHeight: "300px"}}>
        <h4>{name}</h4>
        <h6>MRP : {price}</h6>
        <select 
            onChange={(e)=>{
                setSize(e.target.value)
            }}
        >
            <option selected value="s">Small</option>
            <option value="m">Medium</option>
            <option value="l">Large</option>
        </select>
        <h6>Quantity : <button onClick={()=>{setQty(prev=>prev-1)}}>-</button>{qty}<button onClick={()=>{setQty(prev=>prev+1)}}>+</button></h6>
        <DisplayPriceCard totalPrice={totalPrice}/>
    </div>
  )
}

export default ProductCard