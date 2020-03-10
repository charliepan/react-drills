import React, { Component } from 'react'

export default class NewTask extends Component {

    constructor(){
        super();
        this.state = {
            userInput:'',
        }
    }

    handleAdd = () =>{
        this.props.addToList(this.state.userInput);
        this.setState({userInput:''});
    }

    render() {

        return (
            <div>
                <input value={this.state.userInput} onChange={e=>{this.setState({userInput:e.target.value})}} type="text" placeholder="Enter new task"/>
                <button onClick={this.handleAdd}>Add</button>
            </div>
        )
    }
}
