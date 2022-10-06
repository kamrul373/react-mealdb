import React from 'react';
import "./Header.css";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <NavLink
                className={({ isActive }) => isActive ? "active" : undefined} to="/home">Home
            </NavLink>
            <NavLink
                className={({ isActive }) => isActive ? "active" : undefined} to="/meals">Meals
            </NavLink>
        </div>
    );
};

export default Header;