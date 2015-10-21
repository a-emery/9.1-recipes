import React from 'react';
import Home from './home';

var Sidebar = React.createClass({

  propTypes: {
    onChange: React.PropTypes.func,
    onSearchSubmit: React.PropTypes.func
  },

  getInitialState() {
    return {
      search: ''
    }
  },

  render() {
    return (
        <div className="sidebar">
          <ul>
            <form>
              <input type="search" placeholder="Search Recipes..." onKeyUp={this.props.onChange} />
              <input type="submit" value="search" onClick={this.props.onSearchSubmit} />
            </form>
          </ul>
        </div>
    )
  }
});

export default Sidebar;
