import React, { Component } from 'react';
import { Menu } from 'antd';

import {PlusCircleOutlined} from '@ant-design/icons'

export default class TodoItemLabelMenu extends Component {
    handleAddNewLabel = () => {
        this.props.setLabelAdderVisibility(true);
    }

    handleLabelClick = (label) => {
        this.props.addLabel(this.props.targetTodoItem, label);
    }

    render() {
        const {labels} = this.props;
        return (
            <Menu>
                <Menu.Item key="add" onClick={this.handleAddNewLabel}>new label <PlusCircleOutlined /></Menu.Item>
                {
                    labels.map(label =>
                        <Menu.Item key={label.id} onClick={()=>this.handleLabelClick(label)}>
                            {label.text}
                        </Menu.Item>
                    )
                }
            </Menu>
        )
    }
}
