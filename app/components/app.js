import React from 'react';
import _ from 'underscore';

import Header from './header';
import RecipesList from './recipesList';
import Sidebar from './sidebar';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      search: '',
      sort: 'id',
      order: 'asc'
    };

    _.bindAll(this, 'onSearch', 'onSort', 'onOrder');
  }

  onSearch() {

  }

  onSort() {

  }

  onOrder() {

  }

  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <div className="content">
          <RecipesList
              onSearch={this.onSearch}
          />
        </div>
      </div>
    )
  }
}

export default App
