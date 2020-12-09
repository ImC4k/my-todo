import { 
    CREATE_NEW_TODO, 
    DELETE_TODO,
    TOGGLE_TODO_STATUS 
} from './actionTypes';

export const createNewTodo = (newTodo) => {
    return {
        type: CREATE_NEW_TODO,
        payload: newTodo
    };
}

export const toggleTodoDone = (uuid) => {
    return {
        type: TOGGLE_TODO_STATUS,
        payload: uuid
    };
}

export const deleteTodo = (uuid) => {
    return {
        type: DELETE_TODO,
        payload: uuid
    };
}