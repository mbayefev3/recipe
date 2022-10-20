import React from "react";


const RecipeRow =({ RecipeData,deleteRecipe}) =>{


    return (
        RecipeData.map((recipe,i )=> {
            const {name,cuisine,photo,ingredients,preparation}=recipe
            return (
              <tr key={i} className='list'>
              <td>{name}</td>
              <td>{cuisine}</td>
              <td><img src={photo}/></td>
              {  ingredients.length>=205 ?<td className="content_td"><p>{ingredients}</p></td>: <td>{ingredients}</td>}
              {preparation.length>=205 ?<td className="content_td"><p>{preparation}</p></td>:<td>{preparation}</td>}
              <td><button name="delete" onClick={() =>  deleteRecipe(name)}>delete</button></td>
            </tr>
            )
          })
    )
}



export default RecipeRow