import React from 'react';

const Ingredients = ({ ingredient }) => {
    const { name, messure } = ingredient;
    return (
        <div>
            <div>
                <img src={`https://www.themealdb.com/images/ingredients/${name}.png`} alt={name} style={{ width: "100px" }} />
                <p>{name}</p>
                <p><b>Amount :</b> {messure}</p>
            </div>

        </div>
    );
};

export default Ingredients;