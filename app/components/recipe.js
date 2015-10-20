import React from 'react';
import _ from 'underscore';

var Recipe = React.createClass({
  propTypes: {
    recipe: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      recipe: this.props.recipe,
      servings: this.props.recipe.servings,
      updatedServings: this.props.recipe.servings,
      us: true
    };
  },

  handleServingChange(e) {
    this.setState({
      servings: e.target.value
    });
  },

  updateServings(e) {
    e.preventDefault();
    this.setState({
      updatedServings: this.state.servings
    })
  },

  usFunction() {
    this.setState({
      us: true
    })
  },

  metricFunction() {
    this.setState({
      us: false
    })
  },

  render() {

    if (this.state.us) {
      return(
        <div className="recipeContainer">
          <h2>{this.props.recipe.name}</h2>
          <form action="" onSubmit={this.updateServings} className="recipeAdjustmentForm">
            <p>Makes:&nbsp;</p>
            <input type="number" value={this.state.servings} onChange={this.handleServingChange} className="adjustmentNumberInput"/>
            <p>&nbsp;servings</p>
            <div className="adjustmentRadioContainer">
              <input type="radio" name="unitType" className="adjustmentRadioInput" defaultChecked onClick={this.usFunction} />
              <p>US</p>
            </div>
            <div className="adjustmentRadioContainer">
              <input type="radio" name="unitType" className="adjustmentRadioInput" onClick={this.metricFunction} />
              <p>Metric</p>
            </div>
            <input type="submit" value="Adjust Recipe" className="adjustmentSubmit" />
          </form>
          <ul className="ingredientsList">
              {
                this.props.recipe.ingredients.map((i) => {
                  return(
                    <li key={_.uniqueId('Ingredient')}>
                      <p className="ingredientInfo"><input type="checkbox" />&nbsp;{this.state.updatedServings * i.qty} {i.unit} of {i.name}</p>
                    </li>
                  )
                })
              }
          </ul>
        </div>
      )
    } else {
      return(
        <div className="recipeContainer">
        <h2>{this.props.recipe.name}</h2>
            <form action="" onSubmit={this.updateServings} className="recipeAdjustmentForm">
              <p>Makes:&nbsp;</p>
              <input type="number" value={this.state.servings} onChange={this.handleServingChange} className="adjustmentNumberInput"/>
              <p>&nbsp;servings</p>
              <div className="adjustmentRadioContainer">
                <input type="radio" name="unitType" className="adjustmentRadioInput" value="US" onClick={this.usFunction} />
                <p>US</p>
              </div>
              <div className="adjustmentRadioContainer">
                <input type="radio" name="unitType" className="adjustmentRadioInput" value="Metric" onClick={this.metricFunction} />
                <p>Metric</p>
              </div>
              <input type="submit" value="Adjust Recipe" className="adjustmentSubmit" />
            </form>
            <h1>This is America, we use the Imperial system</h1>
            <img src="./img/america.gif" alt="" className="americaImg" />
            <img src="./img/hulk.gif" alt="" className="americaImg" />
            <img src="./img/car.gif" alt="" className="americaImg" />
            </div>
      )
    }
  }
});

export default Recipe;
