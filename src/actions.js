import { 
    CREATE_NEW_TODO, 
    DELETE_TODO,
    UPDATE_TODO_ITEM,
    SET_TODO_LIST 
} from './actionTypes';

export const createNewTodo = (newTodo) => {
    return {
        type: CREATE_NEW_TODO,
        payload: newTodo
    };
}

export const updateTodoItem = (updatedTodoItem) => {
    return {
        type: UPDATE_TODO_ITEM,
        payload: updatedTodoItem
    };
}

export const deleteTodo = (uuid) => {
    return {
        type: DELETE_TODO,
        payload: uuid
    };
}

export const setTodoList = (todoList) => {
    return {
        type: SET_TODO_LIST,
        payload: todoList
    };
}