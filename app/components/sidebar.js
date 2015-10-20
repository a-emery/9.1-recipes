import React from 'react';

var Sidebar = React.createClass({

  getInitialState() {
    return {
      search: ''
    }
  },

  render() {
    return (
        <div className="sidebar">
          <ul>
            <input type="text" onKeyUp={this.props.onSearch} />
          </ul>
        </div>
    )
  }
});

export default Sidebar;
