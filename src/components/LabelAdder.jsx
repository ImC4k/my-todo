import React, { Component } from 'react';
import {Input, Modal} from 'antd';
import {v4 as uuidv4} from 'uuid';

export default class LabelAdder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newLabel: '',
        };
        console.log("loaded");
    }

    handleInput = (event) => {
        this.setState({
            newLabel: event.target.value,
        });
    }

    handleOk = () => {
        const newLabel = {
            id: uuidv4(),
            text: this.state.newLabel,
            color: "#FFFFFF",
        }
        this.props.createNewLabel(newLabel);
        this.props.addLabel(this.props.targetTodoItem, newLabel);
        this.handleClose();
    }
    
    handleClose = () => {
        this.setState({
            newLabel: '',
        })
        this.props.setLabelAdderVisibility(false);
        console.log('close');
    }
    
    render() {
        const {labelAdderVisibility} = this.props;
        return (
            <Modal
                title="Add a new label"
                visible={labelAdderVisibility}
                onCancel={this.handleClose}
                onOk={this.handleOk}
                okText='Add'
            >
                <Input value={this.state.newLabel} placeholder='add new label' onChange={this.handleInput} onPressEnter={this.handleOk}/>
            </Modal>
        )
    }
}
