import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/app';
import RecipesList from './components/recipesList';
import Home from './components/home';
import Sidebar from './components/sidebar';
import RecipesView from './components/recipesView';
import RecipesForm from './components/recipesForm';

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/list" component={RecipesView} />
      <Route path="/modifyRecipe" component={RecipesForm} />
    </Route>
  </Router>
),
document.getElementById('application'));
