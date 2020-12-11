import React, { Component } from 'react';
import { Input, Modal, notification } from 'antd';
import { CirclePicker } from 'react-color'
import { createNewLabel } from '../../api/labels.service';

import './LabelAdder.style.scss';

export default class LabelAdder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newLabel: '',
            color: '#FFFFFF',
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
        const newLabelItem = {
            text: newLabel,
            color: color,
        }
        this.setState({
            submitButtonEnabled: false,
        });

        createNewLabel(newLabelItem)
        .then(({data}) => {
            this.props.createNewLabel(data);
            this.setState({
                submitButtonEnabled: true,
            });
            this.handleClose();
        })
        .catch(({response}) => {
            notification.error({
                message: 'Failed to create new label',
                description: response.data.message
            });
        });
    }

    handleClose = () => {
        this.setState({
            newLabel: '',
        })
        this.props.setLabelAdderVisibility(false);
    }

    handleColorChange = (color, event) => {
        this.setState({
            color: color.hex
        });
        console.log(`new color: ${color.hex}`);
    }

    render() {
        const { labelAdderVisibility } = this.props;
        return (
            <Modal
                title="Add a new label"
                visible={labelAdderVisibility}
                onCancel={this.handleClose}
                onOk={this.handleOk}
                okText='Add'
            >
                <Input value={this.state.newLabel} placeholder='add new label' onChange={this.handleInput} onPressEnter={this.handleOk} />
                <div className="color-picker">
                    <p>Color for this label:</p>
                    <CirclePicker onChangeComplete={this.handleColorChange} />
                </div>
            </Modal>
        )
    }
}
