import store from 'store';
import Recipe from 'components/recipe'

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

    return (
      <div>
        <ul className="recipesList">
          {
            this.props.recipes.map((r) => <Recipe recipe={r} key={r.id}/>)
          }
        </ul>
      </div>
    )
  },
})

export default RecipesList;
