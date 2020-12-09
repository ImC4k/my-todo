import { combineReducers } from 'redux';
import {
    CREATE_NEW_TODO,
    UPDATE_TODO_ITEM,
    DELETE_TODO,
    SET_TODO_LIST,
    SET_LABEL_ADDER_VISIBILITY
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
    return state;
};

const labelAdderVisibility = (state = false, action) => {
    if (action.type === SET_LABEL_ADDER_VISIBILITY) {
        return action.payload
    }
    return state;
}

export default combineReducers({
    todoList,
    labelAdderVisibility
});