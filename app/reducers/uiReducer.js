import {
    POST_DISPLAYED
} from '../constants/index';

const initialState = {
    postDisplayed: 0
}

export default function uiReducer(state = initialState, action) {
    switch(action.type) {
        case POST_DISPLAYED:
            return Object.assign({}, state, {
                postDisplayed: action.payload
            });
        default:
            return state;
    }
}
