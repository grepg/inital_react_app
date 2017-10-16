import React from 'react';
import {render} from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import Dashboard from './containers/Dashboard.jsx';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <Route exact path="/" component={Dashboard}/>
      </HashRouter>
    );
  }
}

render(<App/>, document.getElementById('app'));
