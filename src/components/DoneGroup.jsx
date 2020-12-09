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
                        todoList.length? todoList.map(todoItem => 
                            <TodoItemContainer key={todoItem.id} todo={todoItem} />
                        )
                        :
                        <h4>{`such emptiness, see word drink water :)`}</h4>
                    }
                </div>
            </div>
        )
    }
}
