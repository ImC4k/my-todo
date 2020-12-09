import React, { Component } from 'react';
import { Menu } from 'antd';

import {PlusCircleOutlined} from '@ant-design/icons'

export default class TodoItemLabelMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            labels : [
                {
                    id: '1',
                    text: 'test1',
                    count: 1
                },
                {
                    id: '2',
                    text: 'test2',
                    count: 2
                }
            ]
        }
    }
    

    handleAddNewLabel = () => {
        // todo popup to allow user input
        this.props.setLabelAdderVisibility(true);
    }

    handleLabelClick = (label) => {
        // toggle adding/removing this label
        console.log(`clicked ${JSON.stringify(label, null, 4)}`);
    }

    render() {
        const {labels} = this.state;
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
