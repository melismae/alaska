import {
    FETCH_FAIL,
    INSTA_VINE_POSTS,
    TWITTER_POSTS,
    MAIN_DISPLAYED,
    SIDEBAR_DISPLAYED,
    AVATAR_VISIBILITY
} from '../constants/index';

const initialState = {
    error: false,
    instaVinePosts: null,
    twitterPosts: null,
    mainDisplayed: null,
    sidebarDisplayed: null,
    avatarVisibility: "shown"
}

export default function uiReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_FAIL:
            return Object.assign({}, state, {
                error: action.err
            });
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
        case SIDEBAR_DISPLAYED:
            return Object.assign({}, state, {
                sidebarDisplayed: action.payload
            });
        case AVATAR_VISIBILITY:
            return Object.assign({}, state, {
                avatarVisibility: action.payload
            });
        default:
            return state;
    }
}
