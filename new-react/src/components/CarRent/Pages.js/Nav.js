import React from 'react'
import { Link } from 'react-router-dom';
import carslogo from '../Assets/carrent1.webp'
const Nav = () => {
    return (
        <>
            <nav className='home_nav'>
                <div className='nav_logo'>
                    <img src={carslogo}></img>
                </div>
                <ul className='nav_ul'>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/cardetails"><li>carDetails</li></Link>
                    <Link to="/office"><li>officeDetails</li></Link>
                </ul>
            </nav>

        </>
    )
}

export default Nav