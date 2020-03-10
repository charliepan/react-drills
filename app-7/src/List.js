import React, { Component } from 'react';
import Todo from './Todo'

export default class List extends Component {

    render() {
        let list = this.props.tasks.map((val, i ) => {
            return <Todo key={i} task={val}/>
        });
        return (
            <div>
                {list}
            </div>
        )
    }
}
