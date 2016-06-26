require('normalize.css/normalize.css');
require('../styles/App.css');

import React from 'react';

class AppComponent extends React.Component {
  foo() {}

  render() {
    return (
      <div className="index">
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
