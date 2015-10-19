var Header = React.createClass({
  render() {
    return (
        <nav className="nav">
          <ul>
            <a href=""><li>Home</li></a>
            <a href="#recipes"><li>Recipes List</li></a>
            <li>Add Recipe</li>
          </ul>
        </nav>
    )
  }
});

export default Header;
