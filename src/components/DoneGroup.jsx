import React, { Component } from 'react'
import TodoItemContainer from '../containers/TodoItem.container';

import '../styles/TodoGroup.style.scss';
import '../styles/TodoList.style.scss';

export default class TodoGroup extends Component {
    render() {
        const { todoList } = this.props;
        return (
            <div className='todo-items-container' style={{height: '90vh'}}>
                <div className='todo-group'>
                    <h1>Done items</h1>
                    {
                        todoList.map(todoItem => 
                            <TodoItemContainer key={todoItem.id} todo={todoItem} />
                        )
                    }
                </div>
            </div>
        )
    }
}
