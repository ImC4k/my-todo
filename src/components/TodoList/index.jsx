import React, { Component } from 'react';
import TodoGroupContainer from '../TodoGroup/TodoGroup.container';
import TodoGeneratorContainer from '../TodoGenerator/TodoGenerator.container';

import './TodoList.style.scss';
import LabelAdderContainer from '../LabelAdder/LabelAdder.container';
class TodoList extends Component {
    render() {
        return (
            <div>
                <h1 className='header'>Todo List</h1>
                <LabelAdderContainer />
                <div className='todo-items-container'>
                    <TodoGroupContainer />
                </div>
                <TodoGeneratorContainer />
            </div>
        );
    }
}

export default TodoList;