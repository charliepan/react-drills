import React, { Component } from 'react';
import './App.css'

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      userInput:'',
      list:['spaghetti','ice cream','sushi','bologna','cheese']
    }
  }

  render() {

    const filteredlist = this.state.list.filter((val,i)=>{
      if(val.includes(this.state.userInput)){
        return true;
      }
      else{
        return false;
      }
    });

    const h2list = filteredlist.map((val,i)=>{
      return <h2 key={i}>{val}</h2>
    });


    return (
      <div className='App'>
        <input onChange={ e =>{this.setState({userInput: e.target.value})}} type="text"/>
        {h2list}
      </div>
    )
  }
}
