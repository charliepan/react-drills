import React, { Component } from 'react'

export default class Login extends Component {
    constructor(){
        super();
        this.state={
            user:'',
            password:''
        }
    }

    handleClick = () =>{
        alert(`Username: ${this.state.user}  Password: ${this.state.password}`);
    }

    render() {
        return (
            <div>
                <input onChange={ e =>{this.setState({user: e.target.value})}} type="text"/>
                <input onChange={ e =>{this.setState({password: e.target.value})}} type="text"/>
                <button onClick={this.handleClick}>Login!</button>
            </div>
        )
    }
}
