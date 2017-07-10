import Reflux from 'reflux';
import { addRecipe } from '../actions/RecipesActions.js';

class RecipesStore extends Reflux.Store {

    constructor() {
      super();
      this.state = {
        recipes: [
          'Breakfast butter eggs',
          'Tony\'s avocado',
          'Coconut porridge'
        ]
      }
      this.listenTo(addRecipe, this.onAddRecipe);
    }

    onAddRecipe(recipeName) {
      this.setState({
        recipes: [...this.state.recipes, recipeName]
      })
    }
}

export default RecipesStore;
