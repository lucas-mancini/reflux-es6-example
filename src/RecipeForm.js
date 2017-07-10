import React from 'react';
import { addRecipe } from './actions/RecipesActions';
import './RecipeForm.css';

class RecipeForm extends React.Component {

  render() {
    return (
        <div className='RecipeForm'>
            <h1>Add Recipe</h1>
            <form onSubmit={this.handleSubmit}>
                <label className='RecipeForm--label' htmlFor="recipeName">Recipe Name:</label>
                <input className='RecipeForm--input' type="text" id="recipeName" placeholder="Boiled water" ref='recipeName' />
                <br />
                <button type="submit">Save</button>
            </form>
        </div>
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const name = this.refs.recipeName.value.trim();
    addRecipe(name);
  }

}

export default RecipeForm;
