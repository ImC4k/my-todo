import React, { Component } from 'react';
import TodoGroup from './TodoGroup';
import TodoGenerator from './TodoGenerator';

class TodoList extends Component {
    render() {
        return (
            <div>
                <h1>TodoList</h1>
                <TodoGroup />
                <TodoGenerator />
            </div>
        );
    }
}

export default TodoList;