import React, { Component } from 'react';
import Todo from './Todo';
import './App.css';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      list:[],
      userInput:''
    }
  }

  handleClick = () =>{
    this.setState({list: [...this.state.list, this.state.userInput], userInput:''});
  }

  render() {

    let todoList = this.state.list.map((val, i) => {
      return <Todo key={i} task = {val}/>
    })

    return (
      <div className='App'>
        <h1>My to-do list:</h1>
        <input value={this.state.userInput} onChange={e=>{this.setState({userInput:e.target.value})}} type="text" placeholder="Enter new task"/>
        <button onClick={this.handleClick}>Add</button>
        <br/>
        {todoList}
      </div>
    )
  }
}
