import React, { Component } from 'react';
import Layuot from './hoc/Layout/Layout'
import Quiz from './containers/Quiz/Quiz'

class App extends Component {
  render() {
    return (
      <Layuot>
        <Quiz />

      </Layuot>
    );
  }
}

export default App
