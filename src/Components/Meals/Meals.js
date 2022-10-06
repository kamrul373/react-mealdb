import React from 'react';
import "./Meals.css";
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';
import MealNav from '../MealNav/MealNav';

const Meals = () => {
    let meals = useLoaderData();
    meals = meals.meals;
    let charset = "abcdefghijklmnopqrstuvwxyz";
    charset = charset.split("");
    return (
        <div>
            <h1>Meals {meals.length} </h1>
            <div className='flex'>
                {
                    charset.map((char, idx) => <MealNav char={char} key={idx}></MealNav>)
                }
            </div>
            <div className='grid'>
                {
                    meals.map(meal => <Meal meal={meal} key={meal.idMeal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;