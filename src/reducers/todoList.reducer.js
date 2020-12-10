import {
    CREATE_NEW_TODO,
    UPDATE_TODO_ITEM,
    DELETE_TODO,
    SET_TODO_LIST,
    ADD_LABEL,
    REMOVE_LABEL
} from '../actionTypes';

const todoList = (state = [], action) => {
    if (action.type === CREATE_NEW_TODO) {
        return [...state, action.payload];
    }
    else if (action.type === UPDATE_TODO_ITEM) {
        return state.map(todoItem => {
            if (todoItem.id === action.payload.id) {
                return { ...action.payload };
            }
            return { ...todoItem };
        });
    }
    else if (action.type === DELETE_TODO) {
        return state.filter(todoItem => todoItem.id !== action.payload);
    }
    else if (action.type === SET_TODO_LIST) {
        return action.payload;
    }
    else if (action.type === ADD_LABEL) {
        return state.map(todoItem => {
            if (todoItem.id === action.payload.todoItemId) {
                const newLabelList = [...todoItem.labels, action.payload.label];
                return { ...todoItem, labels: newLabelList };
            }
            return { ...todoItem };
        });
    }
    else if (action.type === REMOVE_LABEL) {
        return state.map(todoItem => {
            if (todoItem.id === action.payload.todoItemId) {
                const newLabelList = todoItem.labels.filter(label => label.id !== action.payload.label.id);
                return { ...todoItem, labels: newLabelList };
            }
            return { ...todoItem };
        });
    }
    return state;
};

export default todoList;