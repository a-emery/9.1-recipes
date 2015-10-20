import React from 'react';

var Home = React.createClass({
  propTypes: {
    search: React.PropTypes.string,
    resetSearch: React.PropTypes.func
  },

  render() {
    return (
        <div>
          <h3 className="searchResultsInfo">Search results for {this.props.search}</h3>
          <input type="submit" value="Return to Recipes List" onClick={this.props.resetSearch} />
        </div>
    )
  }
});

export default Home;
