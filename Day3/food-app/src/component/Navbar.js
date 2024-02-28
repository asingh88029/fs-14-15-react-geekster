import './Navbar.css'
import './Button'
import { Button } from './Button';

function Navbar (){
    return (
        <>
            <nav className="navbar">
                <div>
                    {/* Add Brand Logo & Name*/}
                    {/* <img src="src/assest/image/geekster-logo.png"/> */}
                    <span>GeekFoods</span>
                </div>
                <div className='nav-links'>
                    <div><span>Home</span></div>
                    <div><span>Quote</span></div>
                    <div><span>Restaurant</span></div>
                    <div><span>Foods</span></div>
                    <div><span>Contact</span></div>
                </div>
                <div>
                    <Button borderKaRadius={"4px"} backgroundKaColor={"#1C4ED8"} fontColor={"#FFFFFF"}>Get Started</Button>
                </div>
            </nav>
        </>
    )
}

export default Navbar;