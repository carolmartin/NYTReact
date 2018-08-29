import React, { Component } from 'react';
import ContainerResults from "./components/ContainerResults";
// import ContainerSaved from "./components/ContainerSaved";
import ContainerSearch from "./components/ContainerSearch";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>
        <ContainerSearch/>
        <ContainerResults/>


      </div>
    );
  }
}

export default App;
