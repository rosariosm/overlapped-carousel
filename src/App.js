import React, { Component } from 'react';
import Carousel from './Carousel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]} active={0}/>
      </div>
    );
  }
}

export default App;
