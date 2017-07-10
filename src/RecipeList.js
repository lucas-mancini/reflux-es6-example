import React from 'react';
import Reflux from 'reflux';
import RecipesStore from './stores/RecipesStore';
import './RecipeList.css';

const RecipeListItem = ({ recipeName }) => (
  <li key={recipeName}>{recipeName}</li>
);

class RecipeList extends Reflux.Component {

  constructor(props) {
    super(props);
    this.store = RecipesStore;
  }

  render () {
    const { recipes } = this.state;

    const recipeElements = recipes.map(recipe => {
      return <RecipeListItem key={recipe} recipeName={recipe} />;
    });

    return <div className='RecipeList'>
      <h3>Recipes</h3>
      <ul>{recipeElements}</ul>
    </div>
  }
}

export default RecipeList;
