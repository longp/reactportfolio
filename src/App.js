import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import SpinningCube from "./components/SpinningCube"

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header />
          <SpinningCube width={800} height={600} />
      </div>
    );
  }
}

export default App;
