import React, { Component } from 'react'
import TodoItemContainer from '../containers/TodoItem.container';

export default class TodoGroup extends Component {
    render() {
        const { todoList } = this.props;
        return (
            <div>
                {
                    todoList.map(todoItem => 
                        <TodoItemContainer key={todoItem.id} todo={todoItem} />
                    )
                }
            </div>
        )
    }
}
