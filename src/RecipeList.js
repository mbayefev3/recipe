import React from "react";
import RecipeRow from './RecipeRow'
function RecipeList({ RecipeData, deleteRecipe }) {
  


  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Cuisine</th>
          <th>Photo</th>
          <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-list">
        <RecipeRow  RecipeData={RecipeData} deleteRecipe={deleteRecipe}/>
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
