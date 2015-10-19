import Header from 'components/header';
import RecipesList from 'components/recipesList';

var App = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <RecipesList />
      </div>
    )
  }
})

export default App
