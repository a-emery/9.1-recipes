import React from 'react';
import _ from 'underscore';

import store from '../store';
import Recipe from './recipe'

const RecipesList = React.createClass({
  propTypes: {
    recipes: React.PropTypes.object,
    search: React.PropTypes.string,
    resetSearch: React.PropTypes.func
  },

  render() {

    var recipes = this.props.recipes.toJSON();

    recipes = recipes.filter((recipe) => {
			return _.any(_.values(recipe), (value) =>
        (typeof value == 'string' && value.trim().toLowerCase().indexOf(this.props.search) > -1)
      ) || _.any(recipe.ingredients, (ingredient) =>
      	ingredient.name.trim().toLowerCase().indexOf(this.props.search) > -1
      )
    });

    if(recipes.length >0) {
    return (
      <div className="content">
        <ul className="recipesList">
          {
            recipes.map((r) => <Recipe recipe={r} key={r.id} />)
          }
        </ul>
      </div>
    )
  } else {
    return (
      <div className="content">
        <h1>No recipes matched your search</h1>
        <input type="submit" value="Return to Recipes List" onClick={this.props.resetSearch} />
      </div>
    )
  }
  },
})

export default RecipesList;
