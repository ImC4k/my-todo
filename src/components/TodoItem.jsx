import { DeleteOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import classNames from 'classnames';
import React, { Component } from 'react';
import { deleteTodo, updateTodo } from '../api/todoList.service';
import '../styles/TodoItem.style.scss';
import TodoItemLabelMenuContainer from '../containers/TodoItemLabelMenu.container';


export default class TodoItem extends Component {
    deleteItem = () => {
        deleteTodo(this.props.todo.id)
            .then(_ => {
                this.props.deleteTodo(this.props.todo.id);
            });
    }

    toggleDone = () => {
        const { todo: currentTodo } = this.props;
        const updatedTodoItem = {
            ...currentTodo,
            done: !currentTodo.done
        };

        this.props.updateTodoItem(updatedTodoItem);

        updateTodo(updatedTodoItem)
            .catch(error => {
                console.error(error);
                // undo update
                this.props.updateTodoItem(currentTodo);
            })
    }

    setTargetTodoItem = () => {
        this.props.setTargetTodoItem(this.props.todo);
    }

    render() {
        const { text, done, labels } = this.props.todo;
        return (
            <div onContextMenu={this.setTargetTodoItem} onClick={this.setTargetTodoItem}>
                <Dropdown overlay={<TodoItemLabelMenuContainer />} trigger={['contextMenu']}>
                    <div className='todo-item'>
                        <p onClick={this.toggleDone} className={classNames({ 'done': done }, 'todo-text')}>
                            {text} labels: {labels.map(label=>label.text).join(', ')}
                        </p>
                        <DeleteOutlined onClick={this.deleteItem} className='delete-item-btn'>x</DeleteOutlined>
                    </div>
                </Dropdown>
            </div>
        )
    }
}
