import {
    CREATE_LABEL,
    SET_LABEL_LIST,
    DELETE_LABEL,
    UPDATE_LABEL
} from '../actionTypes';

const labels = (state = [], action) => {
    if (action.type === CREATE_LABEL) {
        return [...state, action.payload];
    }
    else if (action.type === SET_LABEL_LIST) {
        return action.payload;
    }
    else if (action.type === DELETE_LABEL) {
        return state.filter(label => label.id !== action.payload.id);
    }
    else if (action.type === UPDATE_LABEL) {
        return state.map(label => {
            if (label.id === action.payload.id) {
                return { ...action.payload };
            }
            return { ...label };
        });
    }
    return state;
}

export default labels;