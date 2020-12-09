import React, { Component } from 'react'
import TodoItemContainer from '../containers/TodoItem.container';
import { getTodoList } from '../api/todoList.service';
import { getLabels } from '../api/labels.service';

import '../styles/TodoGroup.style.scss';

export default class TodoGroup extends Component {
    componentDidMount = () => {
        getTodoList()
        .then(({data}) => {
            this.props.setTodoList(data);
        });
        getLabels()
        .then(({data}) => {
            this.props.setLabelList(data);
        })
    }

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
