import {
    SET_LABEL_ADDER_VISIBILITY
} from '../actionTypes';

const labelAdderVisibility = (state = false, action) => {
    if (action.type === SET_LABEL_ADDER_VISIBILITY) {
        return action.payload
    }
    return state;
}

export default labelAdderVisibility;