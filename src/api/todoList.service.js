import api from './api';
const path = '/todos';

export const getTodoList = () => {
    return api.get(path);
}

export const createNewTodo = (todoText) => {
    return api.post(path, {text: todoText});
}

export const deleteTodo = (id) => {
    return api.delete(`${path}/${id}`);
}

export const updateTodo = (updatedTodoItem) => {
    const updateRequest = {
        text: updatedTodoItem.text,
        done: updatedTodoItem.done,
        labelIds: updatedTodoItem.labels.map(labelItem => labelItem.id)
    };
    return api.put(`${path}/${updatedTodoItem.id}`, updateRequest);
}