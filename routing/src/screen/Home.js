import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {

  console.log("test", props)
    
  return (
    <div>
        <h1>I am Home Screen</h1>
        <Link to="/screen2"><button>GO TO Screen2</button></Link>
        {/* <a href='/screen2'><button>GO TO Screen2</button></a> */}
        {/* <button>GO TO Screen2</button> */}
    </div>
  )
}

export default Home;
