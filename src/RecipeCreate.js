import React, { useState } from "react";

function RecipeCreate({addRecipeData}) {

  const [formData,setFormData]=useState({
    name:'',
    cuisine:'',
    photo:'',
    ingredients:'',
    preparation:''
  })

 

  const { name,cuisine, photo,ingredients,preparation} =formData

  const handleFormData =({target}) => {
    setFormData({
         ...formData,
         [target.name]:target.value
       })
   
   
     }

     const handleSubmitForm =(e) => {
      e.preventDefault()
      if(name && cuisine && photo && ingredients && preparation){
        addRecipeData({name,cuisine, photo,ingredients,preparation})
        setFormData({
          name:'',
          cuisine:'',
          photo:'',
          ingredients:'',
          preparation:''
        })
      }else{

        setFormData({
          ...formData
        })
      }
      
     }

  return (
    <form name="create" onSubmit={ handleSubmitForm}>
      <table>
        <tbody>
          <tr>
            <td><input name="name" value={name} onChange={handleFormData} placeholder="Name"/></td>
            <td> <input name="cuisine" value={cuisine} onChange={handleFormData} placeholder="Cuisine"/></td>
            <td><input name="photo" value={photo} onChange={handleFormData} placeholder="URL" type='url'/></td>
            <td><textarea name="ingredients" value={ingredients} onChange={handleFormData} placeholder="Ingredients"/></td>
            <td><textarea name="preparation" value={preparation} onChange={handleFormData} placeholder="Preparation"/></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
