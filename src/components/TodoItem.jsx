import { DeleteOutlined } from '@ant-design/icons';
import { Dropdown, notification } from 'antd';
import classNames from 'classnames';
import React, { Component } from 'react';
import { deleteTodo, updateTodo } from '../api/todoList.service';
import '../styles/TodoItem.style.scss';
import TodoItemLabelMenuContainer from '../containers/TodoItemLabelMenu.container';
import { reverseContrast } from '../service/color.service';


export default class TodoItem extends Component {
    deleteItem = (event) => {
        deleteTodo(this.props.todo.id)
            .then(_ => {
                this.props.deleteTodo(this.props.todo.id);
            });
        event.stopPropagation();
    }

    showNotification = () => {
        const { text, done } = this.props.todo;
        notification.open({
            message: 'Todo item status updated',
            description: done ? `${text} is marked as not done` : `${text} is marked as done`,
            duration: 2
        });
    }

    toggleDone = () => {
        const { todo: currentTodo } = this.props;
        const updatedTodoItem = {
            ...currentTodo,
            done: !currentTodo.done
        };

        this.props.updateTodoItem(updatedTodoItem);
        this.showNotification();

        updateTodo(updatedTodoItem)
            .catch(error => {
                console.error(error);
                // undo update
                this.props.updateTodoItem(currentTodo);
            })
    }

    setTargetTodoItem = () => {
        console.log('setting target');
        this.props.setTargetTodoItemId(this.props.todo.id);
    }

    render() {
        const { text, done, labels } = this.props.todo;
        return (
            <div onContextMenu={this.setTargetTodoItem}>
                <Dropdown overlay={<TodoItemLabelMenuContainer />} trigger={['contextMenu']} onClick={() => { this.toggleDone(); this.setTargetTodoItem(); }}>
                    <div className='todo-item'>
                        <p className={classNames({ 'done': done }, 'todo-text')}>
                            {text}
                        </p>
                        <div className="meta-content">
                            <div className='labels'>
                                {
                                    labels.map(label =>
                                        <p className='label' key={label.id} style={{ backgroundColor: label.color, color: reverseContrast(label.color) }}>
                                            {label.text}
                                        </p>
                                    )
                                }
                            </div>
                            <DeleteOutlined onClick={this.deleteItem} className='delete-item-btn'>x</DeleteOutlined>
                        </div>
                    </div>
                </Dropdown>
            </div>
        )
    }
}
