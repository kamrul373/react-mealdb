import React from 'react';
import { NavLink } from 'react-router-dom';
import "./MealNav.css";
const MealNav = (props) => {

    return (
        <div className='mealnav'>
            <NavLink className={({ isActive }) => isActive ? "active" : undefined} to={`/meals/${props.char}`}>{props.char.toUpperCase()}</NavLink>
        </div>
    );
};

export default MealNav;