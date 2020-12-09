import React, { Component } from 'react';
import {Input, Modal} from 'antd';
import {CirclePicker} from 'react-color'
import {v4 as uuidv4} from 'uuid';

import '../styles/LabelAdder.style.scss';

export default class LabelAdder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newLabel: '',
            color: '#FFFFFF'
        };
    }

    handleInput = (event) => {
        this.setState({
            newLabel: event.target.value
        });
    }

    handleOk = () => {
        const {newLabel, color} = this.state;
        const newLabelItem = {
            id: uuidv4(),
            text: newLabel,
            color: color,
        }
        this.props.createNewLabel(newLabelItem);
        this.props.addLabel(this.props.targetTodoItemId, newLabelItem);
        this.handleClose();
    }
    
    handleClose = () => {
        this.setState({
            newLabel: '',
        })
        this.props.setLabelAdderVisibility(false);
        console.log('close');
    }

    handleColorChange = (color, event) => {
        this.setState( {
            color: color.hex
        });
        console.log(`new color: ${color.hex}`);
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
                <div className="color-picker">
                    <p>Color for this label:</p>
                    <CirclePicker onChangeComplete={this.handleColorChange}/>
                </div>
            </Modal>
        )
    }
}
