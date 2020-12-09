import { combineReducers } from 'redux';
import {
    CREATE_NEW_TODO,
    TOGGLE_TODO_STATUS,
    DELETE_TODO
} from './actionTypes';

const todoList = (state = [], action) => {
    if (action.type === CREATE_NEW_TODO) {
        return [...state, action.payload];
    }
    else if (action.type === TOGGLE_TODO_STATUS) {
        return state.map(todoItem => {
            if (todoItem.id === action.payload) {
                return { ...todoItem, done: !todoItem.done };
            }
            return { ...todoItem };
        });
    }
    else if (action.type === DELETE_TODO) {
        return state.filter(todoItem => todoItem.id !== action.payload);
    }
    return state;
};

export default combineReducers({
    todoList
});