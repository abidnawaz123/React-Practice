import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (product) => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products"><i className="fa-solid fa-cart-shopping"></i>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar