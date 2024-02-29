import './Navbar.css'
import './Button'
import { Button } from './Button';

import logo from './.././assest/logo/geekfood-brand-logo.svg';

function Navbar (){
    return (
        <>
            <nav className="navbar">

                <div className='vertical-center' style={{gap:"4px"}}>
                    {/* Add Brand Logo & Name*/}
                    <img src={logo} alt="GeekFood Logo"/>
                    <span>GeekFoods</span>
                </div>

                <div className='nav-links vertical-center'>
                    <div><span>Home</span></div>
                    <div><span>Quote</span></div>
                    <div><span>Restaurant</span></div>
                    <div><span>Foods</span></div>
                    <div><span>Contact</span></div>
                </div>

                <div className='vertical-center'>
                    <Button borderKaRadius="8px" backgroundKaColor="#1C4ED8" fontColor="#FFFFFF">
                        Get Started
                    </Button>
                </div>

            </nav>
        </>
    )
}

export default Navbar;