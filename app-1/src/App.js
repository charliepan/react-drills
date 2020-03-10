import React, { Component } from 'react'
import "./App.css";

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      userInput: ''
    }
  }

  render() {
    return (
      <div className='App'>
          <input onChange={ e =>{this.setState({userInput: e.target.value})}} type="text" name="" id=""/>
          <h3>{this.state.userInput}</h3>
      </div>
    )
  }
}
