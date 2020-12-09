import React, { Component } from 'react';
import classNames from 'classnames';
import { deleteTodo, updateTodo } from '../api/todos.service';

import '../styles/TodoItem.style.scss';

export default class TodoItem extends Component {
    deleteItem = () => {
        deleteTodo(this.props.todo.id)
        .then(_ => {
            this.props.deleteTodo(this.props.todo.id);
        });
    }

    toggleDone = () => {
        const {todo: currentTodo} = this.props;
        const updatedTodoItem = {
            ...currentTodo,
            done: !currentTodo.done
        };
        updateTodo(updatedTodoItem)
        .then(({data: responseTodoItem}) => {
            this.props.updateTodoItem(responseTodoItem);
        })
    }

    render() {
        const { text, done } = this.props.todo;
        return (
            <div className='todo-item'>
                <p onClick={this.toggleDone} className={classNames({ 'done': done }, 'todo-text')}>
                    {text}
                </p>
                <button onClick={this.deleteItem} className='delete-item-btn'>x</button>
            </div>
        )
    }
}
