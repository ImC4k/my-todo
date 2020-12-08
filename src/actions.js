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

export const markTodoDone = (uuid) => {
    return {
        type: TOGGLE_TODO_STATUS,
        payload: {
            id: uuid,
            done: true,
        }
    };
}

export const markTodoNotDone = (uuid) => {
    return {
        type: TOGGLE_TODO_STATUS,
        payload: {
            id: uuid,
            done: false,
        }
    };
}

export const deleteTodo = (uuid) => {
    return {
        type: DELETE_TODO,
        payload: uuid
    };
}