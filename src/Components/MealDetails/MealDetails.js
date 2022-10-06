import React from 'react';
import { useLoaderData } from 'react-router-dom';
import getIngredientsList from '../../Utility/Ingredients';

import Ingredients from '../Ingredients/Ingredients';
import "./MealDetails.css";
const MealDetails = () => {
    const details = useLoaderData().meals[0];
    // getting ingredients used in this meal in an array
    const ingredientsList = getIngredientsList(details);
    return (
        <div>
            <h2>Meal Details of {details.strMeal} </h2>
            <div className='grid' style={{ padding: "50px 100px", gap: "100px", gridTemplateColumns: "200px calc(100% - 200px)  " }} >
                <img src={details.strMealThumb} alt="details.strMeal" style={{ width: "300px" }} />
                <div>
                    <h1 style={{ marginBottom: "50px" }}><i>Ingredients</i></h1>
                    <div className='flex' style={{ gap: "50px" }}>
                        {
                            ingredientsList.map((ingredient, idx) => <Ingredients key={idx} ingredient={ingredient} ></Ingredients>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealDetails;