import React, { Component } from 'react';
import { createNewTodo } from '../../api/todoList.service';
import { showErrorNotification } from '../../service/notification.service';

import { Button, Input } from 'antd';
import './TodoGenerator.style.scss';

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

    handleAddNewTodo = () => {
        if (this.state.todoText === '') return;

        createNewTodo(this.state.todoText)
        .then(({data: newTodoItem}) => {
            this.props.createNewTodo(newTodoItem);
            this.setState({
                todoText: ''
            });
        })
        .catch(({response}) => {
            if (response) {
                showErrorNotification(response.data.message);
            }
            else {
                showErrorNotification('');
            }
        })
    }

    render() {
        return (
            <div className='todo-generator'>
                <Input type="text" name="todo" value={this.state.todoText} size='large'
                    placeholder='input a new todo here' onChange={this.handleTodoChange} onPressEnter={this.handleAddNewTodo}
                />
                <Button onClick={this.handleAddNewTodo} type='primary' shape='round' disabled={this.state.todoText === ''}>add</Button>
            </div>
        )
    }
}
