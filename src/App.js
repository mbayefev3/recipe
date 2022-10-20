import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"


function App() {
  const [recipes, setRecipes] = useState(RecipeData);


 const addRecipeData =(list) => {
 setRecipes([...recipes,list])

  }

  const deleteRecipe=(n) =>{
setRecipes(recipes.filter(({name}) => name!==n))

  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>

      <RecipeList  RecipeData ={recipes }  deleteRecipe={deleteRecipe} />
      <RecipeCreate addRecipeData={addRecipeData}/>

    </div>
  );
}

export default App;
