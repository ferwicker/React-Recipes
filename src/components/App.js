import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import '../css/app.css'
import uuidv4 from 'uuid/v4';

export const RecipeContext = React.createContext();

const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes';

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes);

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON !== null) {
      setRecipes(JSON.parse(recipeJSON))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes]);

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete
  }
  
  function handleRecipeAdd(){
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'instruc.',
      ingredients: [
        {
          id: uuidv4(),
          name: 'name',
          amount: '1 tbsp'
        }
      ]
    };
  
    setRecipes([...recipes, newRecipe])
  };

  function handleRecipeDelete(id){
    setRecipes(recipes.filter(recipe => recipe.id !== id));
  };

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      </RecipeContext.Provider>
  );
}


const sampleRecipes = [
  {
    id: 1,
    name: 'Plain chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: '1. Put salt on Chicken\n2. Put chicken in the oven\n3. Eat the chicken',
      ingredients: [
        {
          id: 1,
          name: 'Chicken',
          amount: '2 pounds'
        },
        {
          id: 2,
          name: 'Salt',
          amount: '1 tsp'
        }
      ]
  },
  {
    id: 2,
    name: 'Plain pork',
    servings: 5,
    cookTime: '0:45',
    instructions: '1. Put paprika on pork\n2. Put pork in the oven\n3. Eat the pork',
      ingredients: [
        {
          id: 1,
          name: 'Pork',
          amount: '3 pounds'
        },
        {
          id: 2,
          name: 'Paprika',
          amount: '2 tbsp'
        }
      ]
  }
]
export default App;
