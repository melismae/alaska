import React, { Component } from 'react';
import { postDisplayed } from '../actions/index.js';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.displayed = this.displayed.bind(this);
    }

    displayed(posts) {
        let postsLen = Object.keys(posts).length;
        for (let i = 0; i < postsLen; i++) {
            setTimeout((x) => {
                this.props.dispatch(postDisplayed(i));
            }, 7000*i);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (Object.keys(nextProps.posts).length > 0 && this.props.ui.postDisplayed === null && nextProps.ui.postDisplayed === null) {
            this.displayed(nextProps.posts);
        }
    }

    render() {
        let posts = this.props.posts;
        let postDisplayed = this.props.ui.postDisplayed;
        let permalink = Object.keys(posts).length > 0 && posts[postDisplayed] ? posts[postDisplayed].permalink : "";
        return (
            <div>
                {permalink}
            </div>
        );
    }
}
