import React from 'react';
import _ from 'underscore';

import store from '../store';
import Recipe from './recipe';
import SearchResults from './searchResults';

const RecipesList = React.createClass({
  propTypes: {
    recipes: React.PropTypes.object,
    search: React.PropTypes.string,
    caseSensitiveSearchSubmit: React.PropTypes.string,
    resetSearch: React.PropTypes.func,
    activeSearch: React.PropTypes.bool
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


    return (
      <div className="content">
        <h1>Recipes</h1>
        <div>{this.props.activeSearch && <SearchResults search={this.props.caseSensitiveSearchSubmit} resetSearch={this.props.resetSearch} searchNumber={recipes.length}/>}</div>
        <ul className="recipesList">
          {
            recipes.map((r) => <Recipe recipe={r} key={r.id} />)
          }
        </ul>
      </div>
    )

  },
})

export default RecipesList;
