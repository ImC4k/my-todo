import React, { Component } from 'react'
import TodoItemContainer from '../containers/TodoItem.container';

import '../styles/TodoGroup.style.scss';

export default class TodoGroup extends Component {

    render() {
        const { todoList } = this.props;
        return (
            <div className='todo-group'>
                {
                    todoList.map(todoItem => 
                        <TodoItemContainer key={todoItem.id} todo={todoItem} />
                    )
                }
            </div>
        )
    }
}
