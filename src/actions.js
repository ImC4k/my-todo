import { 
    CREATE_NEW_TODO, 
    DELETE_TODO,
    UPDATE_TODO_ITEM,
    SET_TODO_LIST,
    SET_LABEL_ADDER_VISIBILITY,
    SET_TARGET_TODO_ITEM,
    CREATE_LABEL,
    ADD_LABEL 
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

export const setLabelAdderVisibility = (state) => {
    return {
        type: SET_LABEL_ADDER_VISIBILITY,
        payload: state
    }
}

export const setTargetTodoItem = (todoItem) => {
    return {
        type: SET_TARGET_TODO_ITEM,
        payload: todoItem
    };
}

export const createLabel = (label) => {
    return {
        type: CREATE_LABEL,
        payload: label
    };
}

export const addLabel = (todoItem, label) => {
    return {
        type: ADD_LABEL,
        payload: { todoItem, label }
    }
}