import React from 'react';
import _ from 'underscore';

import store from '../store';
import Recipe from './recipe'

const RecipesList = React.createClass({
  propTypes: {
    recipes: React.PropTypes.object
  },

  getDefaultProps() {
    return {
      recipes: store.getRecipesCollection()
    }
  },

  componentWillMount() {
    this.props.recipes.fetch();
    this.props.recipes.on('sync add remove', this.forceUpdate.bind(this, null), this);
  },

  render() {
    var recipes = this.props.recipes.toJSON();


    recipes = recipes.filter((recipe) => {
			return _.any(_.values(recipe), (value) =>
        (typeof value == 'string' && value.trim().toLowerCase().indexOf('whiskey') > -1)
      ) || _.any(recipe.ingredients, (ingredient) =>
      	ingredient.name.trim().toLowerCase().indexOf('whiskey') > -1
      )
    });

    console.log(recipes)

    return (
      <div>
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
