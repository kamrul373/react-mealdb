import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Meal.css";
const Meal = ({ meal }) => {
    const { strMeal: mealName, idMeal: id, strArea: area, strMealThumb: thumb } = meal;
    const navigate = useNavigate();
    const handleMealDetails = () => {
        navigate(`/meal/${id}`);
    }
    return (
        <div className='meal'>
            <img src={thumb} alt={mealName} />
            <h2>{mealName}</h2>
            <p>Type : <strong><i>{area}</i></strong> </p>
            <button onClick={handleMealDetails}>Details</button>
        </div>
    );
};

export default Meal;