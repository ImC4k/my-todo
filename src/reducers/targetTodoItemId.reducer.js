import {
    SET_TARGET_TODO_ITEM_ID
} from '../actionTypes';

const targetTodoItemId = (state = '', action) => {
    if (action.type === SET_TARGET_TODO_ITEM_ID) {
        return action.payload;
    }
    return state;
}

export default targetTodoItemId;