require.register('main', function (exports, require, module) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _componentsApp = require('components/app');
    var _componentsApp2 = _interopRequireDefault(_componentsApp);
    ReactDOM.render(React.createElement(_componentsApp2['default'], null), document.getElementById('container'));
});
require.register('store', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var recipes = undefined;
    $.ajaxSetup({
        beforeSend: function beforeSend(xhr, options) {
            if (options.url.match(/api.parse.com/)) {
                xhr.setRequestHeader('X-Parse-Application-Id', 'c5lurk2oYZDA2CBJ8tVZZhP88p5d7LuF5Vo2w6Iz');
                xhr.setRequestHeader('X-Parse-REST-API-Key', 'aXQqVvtU1nD5p74GLjInSb2b43rpMCRmunkOqZ5r');
            }
        }
    });
    var Recipe = Backbone.Model.extend({ idAttribute: 'objectId' });
    var RecipeCollection = Backbone.Collection.extend({
        url: 'https://api.parse.com/1/classes/Recipe',
        model: Recipe,
        parse: function parse(response) {
            return response.results;
        }
    });
    exports['default'] = {
        getRecipesCollection: function getRecipesCollection() {
            return recipes = recipes || new RecipeCollection();
        }
    };
    module.exports = exports['default'];
});
require.register('components/app', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _componentsHeader = require('components/header');
    var _componentsHeader2 = _interopRequireDefault(_componentsHeader);
    var _componentsRecipesList = require('components/recipesList');
    var _componentsRecipesList2 = _interopRequireDefault(_componentsRecipesList);
    var App = React.createClass({
        displayName: 'App',
        render: function render() {
            return React.createElement('div', null, React.createElement(_componentsHeader2['default'], null), React.createElement(_componentsRecipesList2['default'], null));
        }
    });
    exports['default'] = App;
    module.exports = exports['default'];
});
require.register('components/header', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var Header = React.createClass({
        displayName: 'Header',
        render: function render() {
            return React.createElement('nav', { className: 'nav' }, React.createElement('ul', null, React.createElement('a', { href: '' }, React.createElement('li', null, 'Home')), React.createElement('a', { href: '#recipes' }, React.createElement('li', null, 'Recipes List')), React.createElement('li', null, 'Add Recipe')));
        }
    });
    exports['default'] = Header;
    module.exports = exports['default'];
});
require.register('components/recipe', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    var Recipe = React.createClass({
        displayName: 'Recipe',
        propTypes: { recipe: React.PropTypes.object.isRequired },
        getInitialState: function getInitialState() {
            return {
                recipe: this.props.recipe.toJSON(),
                servings: this.props.recipe.toJSON().servings,
                updatedServings: this.props.recipe.toJSON().servings,
                us: true
            };
        },
        handleServingChange: function handleServingChange(e) {
            this.setState({ servings: e.target.value });
        },
        updateServings: function updateServings(e) {
            e.preventDefault();
            this.setState({ updatedServings: this.state.servings });
        },
        usFunction: function usFunction() {
            this.setState({ us: true });
        },
        metricFunction: function metricFunction() {
            this.setState({ us: false });
        },
        render: function render() {
            var _this = this;
            // console.log(this.props.recipe)
            if (this.state.us) {
                return React.createElement('div', { className: 'recipeContainer' }, React.createElement('h2', null, this.state.recipe.name), React.createElement('form', {
                    action: '',
                    onSubmit: this.updateServings,
                    className: 'recipeAdjustmentForm'
                }, React.createElement('p', null, 'Makes:\xA0'), React.createElement('input', {
                    type: 'number',
                    value: this.state.servings,
                    onChange: this.handleServingChange,
                    className: 'adjustmentNumberInput'
                }), React.createElement('p', null, '\xA0servings'), React.createElement('div', { className: 'adjustmentRadioContainer' }, React.createElement('input', {
                    type: 'radio',
                    name: 'unitType',
                    className: 'adjustmentRadioInput',
                    defaultChecked: true,
                    onClick: this.usFunction
                }), React.createElement('p', null, 'US')), React.createElement('div', { className: 'adjustmentRadioContainer' }, React.createElement('input', {
                    type: 'radio',
                    name: 'unitType',
                    className: 'adjustmentRadioInput',
                    onClick: this.metricFunction
                }), React.createElement('p', null, 'Metric')), React.createElement('input', {
                    type: 'submit',
                    value: 'Adjust Recipe',
                    className: 'adjustmentSubmit'
                })), React.createElement('ul', { className: 'ingredientsList' }, this.state.recipe.ingredients.map(function (i) {
                    return React.createElement('li', { key: _.uniqueId('Ingredient') }, React.createElement('p', { className: 'ingredientInfo' }, React.createElement('input', { type: 'checkbox' }), '\xA0', _this.state.updatedServings * i.qty, ' ', i.unit, ' of ', i.name));
                })));
            } else {
                return React.createElement('div', { className: 'recipeContainer' }, React.createElement('h2', null, this.state.recipe.name), React.createElement('form', {
                    action: '',
                    onSubmit: this.updateServings,
                    className: 'recipeAdjustmentForm'
                }, React.createElement('p', null, 'Makes:\xA0'), React.createElement('input', {
                    type: 'number',
                    value: this.state.servings,
                    onChange: this.handleServingChange,
                    className: 'adjustmentNumberInput'
                }), React.createElement('p', null, '\xA0servings'), React.createElement('div', { className: 'adjustmentRadioContainer' }, React.createElement('input', {
                    type: 'radio',
                    name: 'unitType',
                    className: 'adjustmentRadioInput',
                    value: 'US',
                    onClick: this.usFunction
                }), React.createElement('p', null, 'US')), React.createElement('div', { className: 'adjustmentRadioContainer' }, React.createElement('input', {
                    type: 'radio',
                    name: 'unitType',
                    className: 'adjustmentRadioInput',
                    value: 'Metric',
                    onClick: this.metricFunction
                }), React.createElement('p', null, 'Metric')), React.createElement('input', {
                    type: 'submit',
                    value: 'Adjust Recipe',
                    className: 'adjustmentSubmit'
                })), React.createElement('h1', null, 'This is America, we use the Imperial system'), React.createElement('img', {
                    src: '../img/america.gif',
                    alt: '',
                    className: 'americaImg'
                }), React.createElement('img', {
                    src: '../img/hulk.gif',
                    alt: '',
                    className: 'americaImg'
                }), React.createElement('img', {
                    src: '../img/car.gif',
                    alt: '',
                    className: 'americaImg'
                }));
            }
        }
    });
    exports['default'] = Recipe;
    module.exports = exports['default'];
});
require.register('components/recipesList', function (exports, require, module) {
    'use strict';
    Object.defineProperty(exports, '__esModule', { value: true });
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _store = require('store');
    var _store2 = _interopRequireDefault(_store);
    var _componentsRecipe = require('components/recipe');
    var _componentsRecipe2 = _interopRequireDefault(_componentsRecipe);
    var RecipesList = React.createClass({
        displayName: 'RecipesList',
        propTypes: { recipes: React.PropTypes.object },
        getDefaultProps: function getDefaultProps() {
            return { recipes: _store2['default'].getRecipesCollection() };
        },
        componentWillMount: function componentWillMount() {
            this.props.recipes.fetch();
            this.props.recipes.on('sync add remove', this.forceUpdate.bind(this, null), this);
        },
        render: function render() {
            var recipes = this.props.recipes.toJSON();
            return React.createElement('div', null, React.createElement('ul', { className: 'recipesList' }, this.props.recipes.map(function (r) {
                return React.createElement(_componentsRecipe2['default'], {
                    recipe: r,
                    key: r.id
                });
            })));
        }
    });
    exports['default'] = RecipesList;
    module.exports = exports['default'];
});
//# sourceMappingURL=app.js.map
