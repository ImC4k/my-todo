import { combineReducers } from 'redux';
import {
    CREATE_NEW_TODO,
    UPDATE_TODO_ITEM,
    DELETE_TODO,
    SET_TODO_LIST,
    SET_LABEL_ADDER_VISIBILITY,
    SET_TARGET_TODO_ITEM,
    ADD_LABEL
} from './actionTypes';

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
            if (todoItem.id === action.payload.todoItem.id) {
                const newLabelList = [...todoItem.labels, action.payload.label];
                return { ...todoItem, labels: newLabelList };
            }
            return { ...todoItem };
        });
    }
    return state;
};

const labelAdderVisibility = (state = false, action) => {
    if (action.type === SET_LABEL_ADDER_VISIBILITY) {
        return action.payload
    }
    return state;
}

const targetTodoItem = (state = {}, action) => {
    if (action.type === SET_TARGET_TODO_ITEM) {
        console.log(`targeting todo item: ${JSON.stringify(action.payload)}`);
        return action.payload;
    }
    return state;
}

export default combineReducers({
    todoList,
    labelAdderVisibility,
    targetTodoItem
});