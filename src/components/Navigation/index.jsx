import React, { Component } from 'react'
import { Menu } from 'antd';
import {Link} from 'react-router-dom';
import routes from '../../routes';

import './Navigation.style.scss';

export default class Navigation extends Component {
    render() {
        return (
            <Menu mode='horizontal' className='navigation-bar'>
                {
                    routes.map(route => 
                        <Menu.Item key={route.name} >
                            <Link to={route.path}>
                                {route.description}
                            </Link>
                        </Menu.Item>
                    )
                }
            </Menu>
        );
    }
}
