import { Link } from 'react-router';
import React from 'react';

var Header = React.createClass({
  render() {
    return (
        <nav className="nav">
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/list"><li>Recipes List</li></Link>
            <Link to="/modifyRecipe"><li>Add Recipe</li></Link>
          </ul>
        </nav>
    );
  }
});

export default Header;
