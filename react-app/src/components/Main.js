require('normalize.css/normalize.css');
require('../styles/App.css');

import React from 'react';

import CommentFeed from './CommentFeed';

class AppComponent extends React.Component {
  foo() {}

  render() {
    return (
      <div className="index">
        <CommentFeed />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
