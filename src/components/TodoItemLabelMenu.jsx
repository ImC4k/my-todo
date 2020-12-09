import React, { Component } from 'react';
import { Menu } from 'antd';

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
    }

    handleLabelClick = (label) => {
        // toggle adding/removing this label
    }

    render() {
        const {labels} = this.state;
        return (
            <Menu>
                <Menu.Item key="add" onClick={this.handleAddNewLabel}>new label</Menu.Item>
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
