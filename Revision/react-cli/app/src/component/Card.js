import React from 'react'

const Card = (props) => {
  return (
    <div>
        <h2>Name : {props.name}</h2>
        <img src={props.imageSRC}/>
    </div>
  )
}

export default Card;
