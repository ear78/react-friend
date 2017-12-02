import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './friends';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: "Welcome to Elliot React"
        }
    }
    
    updateTitle(e){
        this.setState({
            title: e.target.value
        })
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.title}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. Type in input box to change title.
          <input type="text" onChange={this.updateTitle.bind(this)} />
        </p>
        <hr />
        <Friends />
      </div>
    );
  }
}

export default App;
