import React, { Component } from 'react'
import TodoItemContainer from '../TodoItem/TodoItem.container';

import '../TodoGroup/TodoGroup.style.scss';
import '../TodoList/TodoList.style.scss';

export default class TodoGroup extends Component {
    render() {
        const { todoList } = this.props;
        return (
            <div className='todo-group'>
                {
                    todoList.length? todoList.map(todoItem => 
                        <TodoItemContainer key={todoItem.id} todo={todoItem} />
                    )
                    :
                    <h4>{`such emptiness, see word drink water :)`}</h4>
                }
            </div>
        )
    }
}
