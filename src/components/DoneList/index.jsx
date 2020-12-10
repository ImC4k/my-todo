import React, { Component } from 'react';
import DoneGroupContainer from '../DoneGroup/DoneGroup.container';

import './DoneList.style.scss';
class DoneList extends Component {
    render() {
        return (
            <div>
                <h1 className='header'>Done List</h1>
                <div className='done-items-container'>
                    <DoneGroupContainer />
                </div>
            </div>
        );
    }
}

export default DoneList;