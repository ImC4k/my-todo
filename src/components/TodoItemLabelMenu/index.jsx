import React, { Component } from 'react';
import { Menu, Tooltip } from 'antd';
import { updateTodo } from '../../api/todoList.service';

import { CheckCircleOutlined } from '@ant-design/icons';

import './TodoItemLabelMenu.style.scss';

export default class TodoItemLabelMenu extends Component {

    getTodoItemInRedux = () => {
        const { targetTodoItemId: targetId, todoList } = this.props;
        return todoList.filter(todoItem => todoItem.id === targetId)[0];
    }

    handleLabelClick = (selectedLabel) => {
        const targetTodoItem = this.getTodoItemInRedux();
        if (targetTodoItem.labels.map(labelInTodoItem => labelInTodoItem.id).includes(selectedLabel.id)) {
            this.props.removeLabel(targetTodoItem.id, selectedLabel);
            const updatedLabelList = targetTodoItem.labels.filter(label => label.id !== selectedLabel.id);
            updateTodo({ ...targetTodoItem, labels: updatedLabelList });
        }
        else {
            this.props.addLabel(targetTodoItem.id, selectedLabel);
            const updatedLabelList = [...targetTodoItem.labels, selectedLabel];
            updateTodo({ ...targetTodoItem, labels: updatedLabelList });
        }
    }

    render() {
        const { labels } = this.props;
        const selectedLabelIds = this.getTodoItemInRedux().labels.map(label => label.id);
        return (
            <Menu className='todo-item-label-menu'>
                {
                    labels.map(label =>
                        <Menu.Item key={label.id} onClick={() => this.handleLabelClick(label)} className='todo-item-label-menu-item'>
                            {
                                label.text.length > 20?
                                    <Tooltip title={label.text}>
                                        {`${label.text.substring(0, 20)}...`}
                                    </Tooltip>
                                :
                                    `${label.text}`
                            } 
                            {selectedLabelIds.includes(label.id) && <CheckCircleOutlined />}
                        </Menu.Item>
                    )
                }
            </Menu>
        )
    }
}
