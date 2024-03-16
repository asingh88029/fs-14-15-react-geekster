import {Outlet, Link} from 'react-router-dom';

function AppTemplate(){

    return(
      <div>
        {/* Navbar - It will be common for all the routes */}
        <div style={{height : '10vh', backgroundColor : "yellow"}}><span>NAVBAR</span></div>
        <div style={{height : '90vh', backgroundColor : "blue", display: 'flex'}}>
          {/* Left Side Bar - It will be common for all the routes */}
          <div style={{width : '25vw', backgroundColor : "pink"}}>
            <div>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </div>
            <div>
                <Link to="/cart">
                    <button>Cart</button>
                </Link>
            </div>
            <div>
                <Link to="/product">
                    <button>Product</button>
                </Link>
            </div>
            {/* <div>
                <a href='/product'>
                    <button>Product</button>
                </a>
            </div> */}
          </div>
          {/* Main Area - Which will change according to url/routing */}
          <div style={{width : '75vw', backgroundColor : "red", overflowY : "scroll"}}>
            <Outlet/>
          </div>
        </div>
      </div>
    )
  
}

export default AppTemplate;