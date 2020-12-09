import api from './api';

const getTodoList = () => {
    return api.get('/todos');
}

export {
    getTodoList
};