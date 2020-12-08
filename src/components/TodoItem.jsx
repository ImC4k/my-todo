import React, { Component } from 'react';
import classNames from 'classnames';

import '../styles/TodoItem.style.scss';

export default class TodoItem extends Component {
    deleteItem = () => {
        this.props.deleteTodo(this.props.todo.id);
    }

    toggleDone = () => {
        if (this.props.todo.done) {
            this.props.markTodoNotDone(this.props.todo.id);
        }
        else {
            this.props.markTodoDone(this.props.todo.id);
        }
    }

    render() {
        const {text, done} = this.props.todo;
        return (
            <div className='todo-item'>
                <p onClick={this.toggleDone} className={classNames({'done': done}, 'todo-text')}>
                    {text}
                </p>
                <button onClick={this.deleteItem} className='delete-item-btn'>x</button>
            </div>
        )
    }
}
