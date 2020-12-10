import React, { Component } from 'react';
import { Input, Modal } from 'antd';
import { CirclePicker } from 'react-color'
import { updateLabel } from '../../api/labels.service';
import { getTodoList } from '../../api/todoList.service';

import '../LabelAdder/LabelAdder.style.scss';

export default class LabelEditor extends Component {
    constructor(props) {
        super(props);
        const { text, color } = this.props.label;

        this.state = {
            newLabel: text,
            color: color,
            submitButtonEnabled: true
        };
    }

    handleInput = (event) => {
        this.setState({
            newLabel: event.target.value
        });
    }

    handleOk = () => {
        if (this.state.newLabel === '') return;
        const { newLabel, color } = this.state;
        const { id } = this.props.label;
        const newLabelItem = {
            id: id,
            text: newLabel,
            color: color,
        }
        this.setState({
            submitButtonEnabled: false,
        });

        updateLabel(newLabelItem)
            .then(({ data }) => {
                this.props.updateLabel(data);
                this.props.addLabel(this.props.targetTodoItemId, data);
                this.handleClose();
                this.setState({
                    submitButtonEnabled: true,
                });
                return getTodoList();
            })
            .then(({ data }) => {
                this.props.setTodoList(data);
            })
    }

    handleClose = () => {
        this.setState({
            newLabel: '',
        })
        console.log('close');
        this.props.onClose();
    }

    handleColorChange = (color, event) => {
        this.setState({
            color: color.hex
        });
    }

    render() {
        const { visible, label } = this.props
        if (this.state.newLabel === '') {
            const { text, color } = label;
            this.setState({
                newLabel: text,
                color: color
            });
        }
        return (
            <Modal
                title="Label editor"
                visible={visible}
                onCancel={this.handleClose}
                onOk={this.handleOk}
                okText='Update'
            >
                <Input value={this.state.newLabel} placeholder='rename label here' onChange={this.handleInput} onPressEnter={this.handleOk} />
                <div className="color-picker">
                    <p>Color for this label:</p>
                    <CirclePicker onChangeComplete={this.handleColorChange} />
                </div>
            </Modal>
        )
    }
}
