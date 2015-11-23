import React from 'react';
import _ from 'underscore';

import Header from './header';
import RecipesList from './recipesList';
import Sidebar from './sidebar';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <div className="contentWrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {children: React.PropTypes.object};

export default App;
