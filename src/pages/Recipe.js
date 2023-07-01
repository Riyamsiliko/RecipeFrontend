import React, { useState } from "react";
import "./Recipe.css";
import Homepage from '../components/Homepage';

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div><Homepage/>   
    <div className="recipe-container">
      <h1>Recipes</h1>

      {/* Display Recipes */}
      <div className="recipes">
        <h2>All Recipes</h2>
        {recipes.length > 0 ? (
          <ul>
            {recipes.map((recipe, index) => (
              <li key={index}>
                <h3>{recipe.title}</h3>
                <p>{recipe.ingredients}</p>
                <p>{recipe.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No recipes available.</p>
        )}
      </div>
      </div>
    </div>
  );
};

export default Recipe;
