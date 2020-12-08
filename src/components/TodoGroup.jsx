import React, { Component } from 'react'
import TodoItem from './TodoItem';

export default class TodoGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [
                {
                    "id": "c5eb2e60-a718-409c-a583-9ec78d5123c7",
                    "text": "hi hi",
                    "done": false
                },
            ]
        }
    }

    render() {
        const { todoList } = this.state;
        return (
            <div>
                {
                    todoList.map(todoItem => 
                        <TodoItem key={todoItem.id} data={todoItem} />
                    )
                }
            </div>
        )
    }
}
