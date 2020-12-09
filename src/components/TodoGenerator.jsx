import React, { Component } from 'react';
import { createNewTodo } from '../api/todoList.service';

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
        if (this.state.todoText === '') return;

        createNewTodo(this.state.todoText)
        .then(({data: newTodoItem}) => {
            this.props.createNewTodo(newTodoItem);
            this.setState({
                todoText: ''
            });
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
