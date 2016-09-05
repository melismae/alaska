import {
    INSTA_VINE_POSTS,
    TWITTER_POSTS,
    MAIN_DISPLAYED,
    SECONDARY_DISPLAYED
} from '../constants/index';

const initialState = {
    instaVinePosts: null,
    twitterPosts: null,
    mainDisplayed: null,
    secondaryDisplayed: null
}

export default function uiReducer(state = initialState, action) {
    switch(action.type) {
        case INSTA_VINE_POSTS:
            return Object.assign({}, state, {
                instaVinePosts: action.payload
            });
        case TWITTER_POSTS:
            return Object.assign({}, state, {
                twitterPosts: action.payload
            });
        case MAIN_DISPLAYED:
            return Object.assign({}, state, {
                mainDisplayed: action.payload
            });
        case SECONDARY_DISPLAYED:
            return Object.assign({}, state, {
                secondaryDisplayed: action.payload
            });
        default:
            return state;
    }
}
