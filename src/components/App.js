import React from "react";
import RecipeList from "./RecipeList";
import '../css/app.css'

function App() {
  return (
    <RecipeList recipes={sampleRecipes} />
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
