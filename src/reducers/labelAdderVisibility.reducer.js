import {
    SET_IS_LABEL_ADDER_VISIBLE
} from '../actionTypes';

const labelAdderVisibility = (state = false, action) => {
    if (action.type === SET_IS_LABEL_ADDER_VISIBLE) {
        return action.payload
    }
    return state;
}

export default labelAdderVisibility;