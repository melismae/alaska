import {
    INITIAL_FETCH
} from '../constants/index';

const initialState = {};

export default function postsReducer(state = initialState, action) {
    switch(action.type) {
        case INITIAL_FETCH:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
