import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default class TodoGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: '',
        }
    }
    handleTodoChange = (event) => {
        this.setState({
            todoText: event.target.value,
        });
    }

    handleAddNewTodo = () => {
        const newTodoItem = {
            id: uuidv4(),
            text: this.state.todoText,
            done: false,
        };
        //todo use redux
        console.log(`${JSON.stringify(newTodoItem, null, 4)}`);
    }
    render() {
        return (
            <div>
                <input type="text" name="todo" id="new-todo" className="todo-generator-input" value={this.state.todoText} placeholder='input a new todo here' onChange={this.handleTodoChange} />
                <input type="button" value="add" onClick={this.handleAddNewTodo} />
            </div>
        )
    }
}
