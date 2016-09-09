import jsonp from 'jsonp';
import {
    INITIAL_FETCH,
    INSTA_VINE_POSTS,
    TWITTER_POSTS,
    MAIN_DISPLAYED,
    SIDEBAR_DISPLAYED,
    AVATAR_VISIBILITY
} from '../constants/index';

const url = 'https://platform.postano.com/apiproxy/jsonp/accounts/4299/projects/82658/products/13196/posts';

export function initialFetch() {
    const result = new Promise(function(resolve, request) {
        jsonp(url, null, function (err, data) {
            if (err) {
                reject(err.message);
            } else {
                resolve(data);
            }
        });
    });
    return {
        type: INITIAL_FETCH,
        payload: result
    }
}

export function instaVinePosts(posts) {
    return {
        type: INSTA_VINE_POSTS,
        payload: posts
    }
}

export function twitterPosts(posts) {
    return {
        type: TWITTER_POSTS,
        payload: posts
    }
}

export function mainDisplayed(post) {
    return {
        type: MAIN_DISPLAYED,
        payload: post
    }
}

export function sidebarDisplayed(post) {
    return {
        type: SIDEBAR_DISPLAYED,
        payload: post
    }
}

export function avatarVisibility(status) {
    return {
        type: AVATAR_VISIBILITY,
        payload: status
    }
}
