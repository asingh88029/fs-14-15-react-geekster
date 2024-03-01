import React, { useState } from 'react'
import { Button } from './Button';

const CourseCard = ({name, hour, key}) => {

  const [hourValue, updateHourValue] = useState(hour); 

  return (
    <div 
        style={{
            display: 'inline-block',
            padding: "10px",
            margin: "10px",
            backgroundColor: "black",
            color: "yellow"
        }} 
        key={key}
    >
        <p>Course Name : {name}</p>
        <p>Course Hour : {hourValue}</p>
        <div>
            <Button onClick={()=>{updateHourValue(hourValue+1)}}>+</Button>
            <Button onClick={()=>{updateHourValue(hourValue-1)}}>-</Button>
        </div>
    </div>
  )
}

export default CourseCard