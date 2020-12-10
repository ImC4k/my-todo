import React, { Component } from 'react';
import LabelItemContainer from '../containers/LabelItem.container';
import { Button } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import LabelAdderContainer from './LabelAdder/LabelAdder.container';

import '../styles/LabelListManager.style.scss';

export default class LabelListManager extends Component {
    handleAddNewLabel = () => {
        this.props.setIsLabelAdderVisible(true);
    }

    render() {
        const { labelList } = this.props;
        return (
            <div className='label-list-manager'>
                <div className="header">
                    <h1>Manage Labels</h1>
                    <Button onClick={this.handleAddNewLabel} className='add-new-label-btn' type='primary' shape='round'>
                        New
                        <PlusCircleOutlined />
                    </Button>
                </div>
                <div className="labels">
                    {
                        labelList.map(label =>
                            <LabelItemContainer key={label.id} label={label} />
                        )
                    }
                </div>
                <LabelAdderContainer />
            </div>
        )
    }
}
