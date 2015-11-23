import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

let recipes;

$.ajaxSetup({
  beforeSend(xhr, options) {
    if(options.url.match(/api.parse.com/)) {
      xhr.setRequestHeader("X-Parse-Application-Id", "c5lurk2oYZDA2CBJ8tVZZhP88p5d7LuF5Vo2w6Iz");
      xhr.setRequestHeader("X-Parse-REST-API-Key", "aXQqVvtU1nD5p74GLjInSb2b43rpMCRmunkOqZ5r");
    }
  }
});

const Recipe = Backbone.Model.extend({
  idAttribute: 'objectId',

  urlRoot: "https://api.parse.com/1/classes/Recipe",

  defaults: {
    name: "",
    servings: "",
    ingredients: []
  },

  toJSON() {
    var result = _.clone(this.attributes);
    result.id = result.objectId;
    delete result.objectId;
    return result;
  }
});

const RecipeCollection = Backbone.Collection.extend({
  url: "https://api.parse.com/1/classes/Recipe",
  model: Recipe,
  parse(response) {
    return response.results;
  }
});

export default {
  getRecipesCollection(){
    return (recipes = recipes || new RecipeCollection());
  }
};
