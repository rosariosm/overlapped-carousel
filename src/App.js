import React, { Component } from 'react';
import Carousel from './Carousel';
//import './App.css';
import './carusel.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="carrusel-container">
          <Carousel items={[1, 2, 3]} active={0}/>
        </div>
      </div>
    );
  }
}

export default App;
