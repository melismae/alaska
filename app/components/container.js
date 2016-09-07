import React, { Component } from 'react';
import PostBorder from './post-border';
import MainPost from './main-post';
import Sidebar from './sidebar';
import { Branding } from './branding';
import { instaVinePosts, twitterPosts, mainDisplayed, secondaryDisplayed, avatarStatus } from '../actions/index.js';

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
            }, 50000*i);
        }
    }

    secondaryDisplay(nextProps) {
        let postsLen = Object.keys(nextProps.ui.twitterPosts).length;
        let postKey = nextProps.ui.twitterPosts;
        for (let i = 0; i < postsLen; i++) {
            setTimeout((x) => {
                this.props.dispatch(secondaryDisplayed([postKey[i], postKey[i+1]]));
            }, 50000*i);
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
        console.log(this.props);
        this.props.dispatch(avatarStatus(status));
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
        let postShown = Object.keys(posts).length > 0 && posts[mainDisplay] ? posts[mainDisplay] : "";
        return (
            <div className="post-container">
                <Sidebar />
                <MainPost postShown={postShown} avatarImageStatus={this.avatarImageStatus} avatarStatus={ui.avatarStatus} />
                <Branding />
            </div>
        );
    }
}
