import React, { Component } from 'react'
import { DeleteOutlined } from '@ant-design/icons';
import {notification} from 'antd';
import { reverseContrast } from '../service/color.service';
import {deleteLabel} from '../api/labels.service';
import {getTodoList} from '../api/todoList.service';
import LabelEditorContainer from './LabelEditor/LabelEditor.container';

import '../styles/LabelItem.style.scss';

export default class LabelItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLabelEditorVisible: false
        };
    }
    
    deleteItem = (event) => {
        const {label} = this.props;
        event.stopPropagation();

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

    setIsLabelEditorVisible = (isVisible) => {
        this.setState({
            isLabelEditorVisible: isVisible,
        });
    }


    render() {
        const { text, color } = this.props.label;
        const {isLabelEditorVisible} = this.state;
        return (
            <>
                <LabelEditorContainer visible={isLabelEditorVisible} onClose={()=>this.setIsLabelEditorVisible(false)} label={this.props.label}/>
                <div className='label-item' style={{ backgroundColor: color, color: reverseContrast(color) }} onClick={()=>this.setIsLabelEditorVisible(true)}>
                    <p className='label-text'>
                        {text}
                    </p>
                    <DeleteOutlined onClick={this.deleteItem} className='delete-item-btn' style={{color: reverseContrast(color)}}>x</DeleteOutlined>
                </div>
            </>
        )
    }
}
