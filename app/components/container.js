import React, { Component } from 'react';
import PostBorder from './post-border';
import MainPost from './main-post';
import Sidebar from './sidebar';
import { Branding } from './branding';
import { instaVinePosts, twitterPosts, mainDisplayed, secondaryDisplayed, avatarVisibility } from '../actions/index.js';

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.mainDisplay = this.mainDisplay.bind(this);
        this.secondaryDisplay = this.secondaryDisplay.bind(this);
        this.postSource = this.postSource.bind(this);
        this.avatarImageStatus = this.avatarImageStatus.bind(this);
    }

    mainDisplay(nextProps) {
        let postsLen = Object.keys(nextProps.ui.instaVinePosts).length;
        let postKey = nextProps.ui.instaVinePosts;
        for (let i = 0; i < postsLen; i++) {
            setTimeout((x) => {
                this.props.dispatch(mainDisplayed(postKey[i]));
            }, 8000*i);
        }
    }

    secondaryDisplay(nextProps) {
        let postsLen = Object.keys(nextProps.ui.twitterPosts).length;
        let postKey = nextProps.ui.twitterPosts;
        for (let i = 0; i < postsLen; i++) {
            setTimeout((x) => {
                this.props.dispatch(secondaryDisplayed([postKey[i], postKey[i+1]]));
            }, 7000*i);
        }
    }

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
            this.secondaryDisplay(nextProps);
        }
    }

    render() {
        let { posts, ui } = this.props;
        let mainDisplay = ui.mainDisplayed;
        let top = ui.secondaryDisplayed ? ui.secondaryDisplayed[0] : "";
        let bottom = ui.secondaryDisplayed ? ui.secondaryDisplayed[1] : "";
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
