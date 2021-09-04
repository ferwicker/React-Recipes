import React, { useContext } from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit';
import { RecipeContext  } from './App'

export default function RecipeEdit({ recipe }) {

    const { handleRecipeChange } = useContext(RecipeContext);

    function handleChange(changes) {
        handleRecipeChange(recipe.id, {...recipe, ...changes})
    }

    function handleIngredientChange(id, ingredient){
        const newIngredients = [...recipe.ingredients]; //duplicate recipes in state to new array
        const index = newIngredients.findIndex(i => i.id === id);
        newIngredients[index] = ingredient;
        handleChange({ ingredients:newIngredients })
      }

    return (
        <div className='recipe-edit'>
            <div className='recipe-edit__remove-button-container'>
                <button className='btn recipe-edit__remove-btn'>&times;</button>
            </div>
            <div className='recipe-edit__details-grid'>
                <label className='recipe-edit__label' htmlFor='name'>Name</label>
                <input 
                    className='recipe-edit__input' 
                    type='text' 
                    name='name' 
                    id='name'
                    value= {recipe.name}
                    onInput= {e => handleChange({ name: e.target.value})}
                     />

                <label className='recipe-edit__label' htmlFor='cookTime'>Cook time</label>
                <input 
                    className='recipe-edit__input' 
                    type='text' 
                    name='cookTime' 
                    id='cookTime'
                    value= {recipe.cookTime}
                    onInput= {e => handleChange({ cookTime: e.target.value})} />
                
                <label className='recipe-edit__label' htmlFor='servings'>Servings</label>
                <input 
                    className='recipe-edit__input' 
                    type='number' 
                    min='1' 
                    name='servings' 
                    id='servings'
                    value={recipe.servings}
                    onInput= {e => handleChange({ servings: parseInt(e.target.value) || '' })} />                   
                
                <label className='recipe-edit__label' htmlFor='instructions'>Instructions</label>
                <textarea 
                    className='recipe-edit__input' 
                    name='instructions' 
                    id='instructions'
                    value= {recipe.instructions}
                    onInput= {e => handleChange({ instructions: e.target.value})}
                    />
            </div>
            <br />
            <label className='recipe-edit__label'>Ingredients</label>
            <div className='recipe-edit__ingredients-grid'>
                <div>Name</div>
                <div>Amount</div>
                <div></div>
                {recipe.ingredients.map(ingredient => (
                    <RecipeIngredientEdit 
                        key = {ingredient.id} 
                        ingredient = {ingredient}
                        handleIngredientChange = {handleIngredientChange} />
                ))}
            </div>
            <div className='recipe-edit__add-ingredient-btn-container'>
                <button className='btn btn--primary'>Add Ingredient</button>
            </div>
        </div>
    )
}
