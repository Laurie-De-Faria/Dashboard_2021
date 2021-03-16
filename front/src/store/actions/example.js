import {
    EXAMPLE_SET,
    EXAMPLE_ADD,
} from '../constants/ActionTypes';

export function setExample(values) {
    return async (dispatch) => {
        dispatch({ type: EXAMPLE_SET, payload: values });
        return values;
    };
}

export function addExample(value) {
    return async (dispatch) => {
        dispatch({ type: EXAMPLE_ADD, payload: value });
        return value;
    };
}

export default {
    setExample,
    addExample,
};
