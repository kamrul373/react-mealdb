const getIngredientsList = (details) => {
    const ingredientsList = [];
    for (let i = 1; i <= 20; i++) {
        const name = "strIngredient" + i;
        const messure = "strMeasure" + i;
        if (details[name]) {
            ingredientsList.push(
                { name: details[name], messure: details[messure] }
            );
        }
    }
    return ingredientsList;
}
export default getIngredientsList;