import React, { Component } from 'react';
import './App.css';

export default class App extends Component {

  constructor(){
    super();
    this.state = {
      list:['spaghetti','ice cream','sushi','bologna','cheese']
    }
  }

  render() {
    const h2list = this.state.list.map((val,i)=>{
            return <h2 key={i}>{val}</h2>
    })

    return (
      <div className='App'>
        {h2list}
      </div>
    )
  }
}
