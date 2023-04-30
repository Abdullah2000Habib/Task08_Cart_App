import React from 'react';
import { NavLink } from 'react-router-dom';
import { PATHS } from '../../constants';
import { useProductContext } from '../../contexts/productContext';
import "./style.css";
const Header = () => {
    const {state} = useProductContext();
    return (
        <>
            <div className='headerWrapper'>
                <ul className='headerList'>
                    <li className='headerListItem'>
                        <NavLink className='headerNavLink' to={PATHS.HOME}>Home</NavLink>
                    </li>
                    <li className='headerListItem'>
                        <NavLink className='headerNavLink' to={PATHS.CART}>Cart {state.count}</NavLink>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Header;
