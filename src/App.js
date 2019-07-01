import React, { Component } from 'react';
import Portfolio from './Portfolio';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Heidi Bada</h1>
        <h2>Web developer | Data analyst</h2>
        <Portfolio />
      </div>
    );
  }
}

export default App;
