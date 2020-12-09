import React, { Component } from 'react'
import { DeleteOutlined } from '@ant-design/icons';
import {notification} from 'antd';
import { reverseContrast } from '../service/color.service';
import {deleteLabel} from '../api/labels.service';
import {getTodoList} from '../api/todoList.service';

import '../styles/LabelItem.style.scss';

export default class LabelItem extends Component {
    deleteItem = () => {
        const {label} = this.props;
        deleteLabel(label.id)
        .then(_ => {
            this.props.deleteLabel(label);
            notification.open({
                message: 'Label is deleted',
                description: `The label: ${label.text} is deleted successfully`,
                duration: 3
            });
            return getTodoList();
        })
        .then(({data}) => {
            this.props.setTodoList(data);
        });
    }
    render() {
        const { text, color } = this.props.label;
        return (
            <div className='label-item' style={{ backgroundColor: color, color: reverseContrast(color) }}>
                <p className='label-text'>
                    {text}
                </p>
                <DeleteOutlined onClick={this.deleteItem} className='delete-item-btn' style={{color: reverseContrast(color)}}>x</DeleteOutlined>
            </div>
        )
    }
}
