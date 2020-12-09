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
        this.props.setTargetTodoItemId(this.props.todo.id);
    }

    reverseContrast = (colorInHex) => {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(colorInHex);
        const colorInRgb = {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        };
        const brightness = Math.round(((parseInt(colorInRgb.r) * 299) +
                      (parseInt(colorInRgb.g) * 587) +
                      (parseInt(colorInRgb.b) * 114)) / 1000);
        console.log(`brightness is ${brightness}`);
        return (brightness > 126) ? 'black' : 'white';
    }

    render() {
        const { text, done, labels } = this.props.todo;
        return (
            <div onContextMenu={this.setTargetTodoItem} onClick={this.setTargetTodoItem}>
                <Dropdown overlay={<TodoItemLabelMenuContainer />} trigger={['contextMenu']}>
                    <div className='todo-item'>
                        <p onClick={this.toggleDone} className={classNames({ 'done': done }, 'todo-text')}>
                            {text}
                        </p>
                        <div class='labels'>
                            {
                                labels.map(label => 
                                    <p className='label' key={label.id} style={{backgroundColor: label.color, color: this.reverseContrast(label.color)}}>
                                        {label.text}
                                    </p>
                                )
                            }
                        </div>
                        <DeleteOutlined onClick={this.deleteItem} className='delete-item-btn'>x</DeleteOutlined>
                    </div>
                </Dropdown>
            </div>
        )
    }
}
