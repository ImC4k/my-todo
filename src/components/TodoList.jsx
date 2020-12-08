import React, { Component } from 'react';
import TodoGroupContainer from '../containers/TodoGroup.container';
import TodoGeneratorContainer from '../containers/TodoGenerator.container';

class TodoList extends Component {
    render() {
        return (
            <div>
                <h1>TodoList</h1>
                <TodoGroupContainer />
                <TodoGeneratorContainer />
            </div>
        );
    }
}

export default TodoList;