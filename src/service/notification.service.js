import {notification} from 'antd';

export const showErrorNotification = (message) => {
    notification.error({
        message: 'Failed to create new todo item',
        description: message
    });
}