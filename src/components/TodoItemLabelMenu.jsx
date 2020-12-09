import React, { Component } from 'react';
import { Menu } from 'antd';
import { updateTodo } from '../api/todoList.service';

import { PlusCircleOutlined } from '@ant-design/icons'

export default class TodoItemLabelMenu extends Component {
    handleAddNewLabel = () => {
        this.props.setLabelAdderVisibility(true);
    }

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
        return (
            <Menu>
                <Menu.Item key="add" onClick={this.handleAddNewLabel}>new label <PlusCircleOutlined /></Menu.Item>
                {
                    labels.map(label =>
                        <Menu.Item key={label.id} onClick={() => this.handleLabelClick(label)}>
                            {label.text}
                        </Menu.Item>
                    )
                }
            </Menu>
        )
    }
}
