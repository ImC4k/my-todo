import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import '../styles/TodoGenerator.style.scss';

export default class TodoGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoText: '',
        }
    }
    handleTodoChange = (event) => {
        this.setState({
            todoText: event.target.value,
        });
    }

    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.handleAddNewTodo();
        }
    }

    handleAddNewTodo = () => {
        const newTodoItem = {
            id: uuidv4(),
            text: this.state.todoText,
            done: false,
        };
        this.props.createNewTodo(newTodoItem);
        this.setState({
            todoText: ''
        });
    }
    render() {
        return (
            <div className='todo-generator'>
                <input type="text" name="todo" value={this.state.todoText} 
                    placeholder='input a new todo here' onChange={this.handleTodoChange} onKeyDown={this.handleKeyDown}
                />
                <input type="button" value="add" onClick={this.handleAddNewTodo} />
            </div>
        )
    }
}
