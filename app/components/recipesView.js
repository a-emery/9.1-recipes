import React from 'react';
import store from '../store';
import RecipesList from './recipesList';
import Sidebar from './sidebar';

const RecipesView = React.createClass({

  propTypes: {
    recipes: React.PropTypes.object
  },

  getDefaultProps() {
    return {
      recipes: store.getRecipesCollection()
    }
  },

  getInitialState() {
    return {
      search: '',
      updatedSearch: ''
    };
  },

  componentWillMount() {
    this.props.recipes.fetch();
    this.props.recipes.on('sync add remove', this.forceUpdate.bind(this, null), this);
  },

  componentWillUnmount() {
    this.props.recipes.off('sync add remove', null, this);
  },

  onChange(e) {
    this.setState({
      search: e.target.value.toLowerCase()
    })
  },

  onSearchSubmit() {
    this.setState({
      updatedSearch: this.state.search
    })
  },

  resetSearch() {
    this.setState({
      updatedSearch: ''
    })
  },

  render() {
    var recipes = this.props.recipes

    return (
      <div>
        <RecipesList
            recipes={recipes}
            search={this.state.updatedSearch}
            resetSearch={this.resetSearch}
        />
        <Sidebar
            onChange={this.onChange}
            onSearchSubmit={this.onSearchSubmit}
        />
      </div>
    )
  }
})

export default RecipesView
