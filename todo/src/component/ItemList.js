import React, { useState } from 'react'

const ItemList = ({itemName, index, itemsToBuys, setItemsToBuys, isPurchased}) => {

  const [isChecked, setIsChecked] = useState(isPurchased);  

  const deleteHandler = ()=>{
    setItemsToBuys((prevState)=>{
        const data = [...prevState];

        data.splice(index, 1)

        return data
    })
  }

  return (
    <div
        style={{
            display : 'flex',
            alignItems : 'center',
            justifyContent: 'space-between',
            gap: "1rem"
        }}
    >
        <div>
            <input type="checkbox" checked={isPurchased ? true : false} onChange={(e)=>{
                setIsChecked((prevValue)=>!prevValue);
                setItemsToBuys((prevState)=>{
                    const data = [...prevState]

                    data[index].purchased = !isPurchased;

                    return data
                })
            }}></input>
        </div>
        
        <div>
            <p
                style={{
                    textDecoration : isPurchased ? 'line-through' : 'none'
                }}
            >{itemName}</p>
        </div>

        <div>
            <button
                onClick={deleteHandler}
            >DELETE</button>
        </div>
    </div>
  )
}

export default ItemList