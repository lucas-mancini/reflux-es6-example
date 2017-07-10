import React, { Component } from 'react';
import logo from './logo.svg';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Recipes - A Reflux example application</h2>
        </div>
        <div>
          <RecipeList />
          <RecipeForm />
        </div>

      </div>
    );
  }
}

export default RecipeApp;
