import api from './api';
const path = '/todos';

export const getTodoList = () => {
    return api.get(path);
}

export const createNewTodo = (todoText) => {
    return api.post(path, {text: todoText});
}