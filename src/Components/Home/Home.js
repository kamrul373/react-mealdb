import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from '../Meal/Meal';

const Home = () => {
    let meals = useLoaderData();
    meals = meals.meals;
    return (
        <div>
            <h1>Home</h1>
            <div className='grid'>
                {
                    meals.map(meal => <Meal meal={meal} key={meal.idMeal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Home;