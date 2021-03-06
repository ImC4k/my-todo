import { 
    CREATE_NEW_TODO, 
    DELETE_TODO,
    UPDATE_TODO_ITEM,
    SET_TODO_LIST,
    SET_IS_LABEL_ADDER_VISIBLE,
    SET_TARGET_TODO_ITEM_ID,
    CREATE_LABEL,
    ADD_LABEL,
    REMOVE_LABEL,
    SET_LABEL_LIST,
    DELETE_LABEL,
    UPDATE_LABEL
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

export const setIsLabelAdderVisible = (state) => {
    return {
        type: SET_IS_LABEL_ADDER_VISIBLE,
        payload: state
    }
}

export const setTargetTodoItemId = (todoItem) => {
    return {
        type: SET_TARGET_TODO_ITEM_ID,
        payload: todoItem
    };
}

export const createLabel = (label) => {
    return {
        type: CREATE_LABEL,
        payload: label
    };
}

export const addLabel = (todoItemId, label) => {
    return {
        type: ADD_LABEL,
        payload: { todoItemId, label }
    }
}

export const removeLabel = (todoItemId, label) => {
    return {
        type: REMOVE_LABEL,
        payload: { todoItemId, label }
    }
}

export const setLabelList = (labelList) => {
    return {
        type: SET_LABEL_LIST,
        payload: labelList
    }
}

export const deleteLabel = (label) => {
    return {
        type: DELETE_LABEL,
        payload: label
    };
}

export const updateLabel = (label) => {
    return {
        type: UPDATE_LABEL,
        payload: label
    }
}