import React, { Component } from 'react';
import MainPost from './main-post';
import Sidebar from './sidebar';
import { Branding } from './branding';
import { instaVinePosts, twitterPosts, mainDisplayed, sidebarDisplayed, avatarVisibility } from '../actions/index.js';

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.mainDisplay = this.mainDisplay.bind(this);
        this.sidebarDisplay = this.sidebarDisplay.bind(this);
        this.postSource = this.postSource.bind(this);
        this.avatarImageStatus = this.avatarImageStatus.bind(this);
    }
    /*
        mainDisplay()
        called in componentWillReceiveProps
        sets up the redux state to keep track of what main post is shown
        the setInterval loops continuously after the first dispatch
    */
    mainDisplay(nextProps) {
        let postsLen = Object.keys(nextProps.ui.instaVinePosts).length;
        let postKey = nextProps.ui.instaVinePosts;
        let i = 0;
        this.props.dispatch(mainDisplayed(postKey[0]));
        setInterval(() => {
            i++;
            if (i % postsLen === 0) {
                i = 0;
            }
            this.props.dispatch(mainDisplayed(postKey[i]));
        }, 8000);
    }

    /*
        sidebarDisplay()
        called in componentWillReceiveProps
        sets up the redux state to keep track of what sidebar twitter posts are shown
        the setInterval loops continuously after the first dispatch
    */
    sidebarDisplay(nextProps) {
        let postsLen = Object.keys(nextProps.ui.twitterPosts).length;
        let postKey = nextProps.ui.twitterPosts;
        let i = 0;
        this.props.dispatch(sidebarDisplayed([postKey[0], postKey[1]]));
        setInterval(() => {
            i++;
            if (i % postsLen === 0) {
                i = 0;
            }
            let postKeyTwo = i+1;
            if (postKeyTwo == postsLen) {
                postKeyTwo = 0;
            }
            this.props.dispatch(sidebarDisplayed([postKey[i], postKey[postKeyTwo]]));
        }, 6000);
    }

    /*
        postSource()
        called in componentWillReceiveProps
        creates arrays of the keys that populate the Main Post (instaVinePosts) and Sidebar (twitter)
        then dispatches actions to redux to keep these keys in the store
    */
    postSource(posts) {
        let instaVineArr = [];
        let twitArr = [];
        Object.keys(posts).forEach((key) => {
            let postSource = posts[key].source_type;
            if(postSource === 'instagram' || postSource === 'vine') {
                instaVineArr.push(key);
            } else if (postSource === 'twitter') {
                twitArr.push(key);
            }
        });
        this.props.dispatch(instaVinePosts(instaVineArr));
        this.props.dispatch(twitterPosts(twitArr));
    }
    /*
        avatarImageStatus()
        called in MainPost child component after the instagram avatar image either fails or loads
        redux store keeps a value 'avatarVisibility' that corresponds to a CSS class to show/hide the avatar image div
    */
    avatarImageStatus(status) {
        this.props.dispatch(avatarVisibility(status));
    }
    
    componentWillReceiveProps(nextProps) {
        if (Object.keys(nextProps.posts).length > 0 && this.props.ui.instaVinePosts === null && nextProps.ui.instaVinePosts === null) {
            this.postSource(nextProps.posts);
        }
        if(this.props.ui.instaVinePosts === null && nextProps.ui.instaVinePosts !== null) {
            this.mainDisplay(nextProps);
        }
        if(this.props.ui.twitterPosts === null && nextProps.ui.twitterPosts !== null) {
            this.sidebarDisplay(nextProps);
        }
    }

    render() {
        let { posts, ui } = this.props;
        let mainDisplay = ui.mainDisplayed;
        let top = ui.sidebarDisplayed ? ui.sidebarDisplayed[0] : "";
        let bottom = ui.sidebarDisplayed ? ui.sidebarDisplayed[1] : "";
        let postObj = Object.keys(posts).length > 0;
        let postShown = Object.keys(posts).length > 0 && posts[mainDisplay] ? posts[mainDisplay] : "";
        let topTweet = Object.keys(posts).length > 0 && posts[top] ? posts[top] : "";
        let bottomTweet = Object.keys(posts).length > 0 && posts[bottom] ? posts[bottom] : "";

        return (
            <div className="post-container">
                <Sidebar topTweet={topTweet} bottomTweet={bottomTweet} />
                <MainPost postShown={postShown} avatarImageStatus={this.avatarImageStatus} avatarVisibility={ui.avatarVisibility} />
                <Branding />
            </div>
        );
    }
}
