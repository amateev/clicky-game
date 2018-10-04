import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import image from './components/1-sitting.jpg';

class App extends Component {
  state = {
    data: ['./1-sitting.jpg','hello',2,3,4]
  }
  render() {
    return (
      <div className="App">
        <ul>
        {this.state.data.map(datum => <li><img src={datum} width="50" height="50" /></li>)}
        </ul>
        <div className="img">
          
          <h1>Hello</h1>
        </div>
      </div>
    );
  }
}

export default App;
