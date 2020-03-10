import React, { Component } from 'react';
import Image from './Image';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Image imageSrc='https://via.placeholder.com/900'/>
      </div>
    )
  }
}
