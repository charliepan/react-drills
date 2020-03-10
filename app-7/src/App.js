import React, { Component } from 'react';
import NewTask from './NewTask';
import List from './List';
import './App.css';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      list:[],
    }
  }

  handleClick = (task) =>{
    this.setState({list: [...this.state.list, task]});
  }

  render() {

    return (
      <div className='App'>
        <h1>My to-do list:</h1>
        <NewTask addToList = {this.handleClick}/>
        <List tasks = {this.state.list}/>
      </div>
    )
  }
}
