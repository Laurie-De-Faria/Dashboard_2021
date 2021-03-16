import {
    EXAMPLE_SET,
    EXAMPLE_ADD,
} from '../constants/ActionTypes';

const initialState = [];

export default function example(state = initialState, action) {
    switch (action.type) {
        case EXAMPLE_SET:
            return action.payload;

        case EXAMPLE_ADD:
            return [
                ...state,
                action.payload,
            ];

        default:
            return state;
    }
}
