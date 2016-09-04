import React, { Component } from 'react';
import { postDisplayed } from '../actions/index.js';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.displayed = this.displayed.bind(this);
    }

    displayed(posts) {
        let f = (x) => {
            return function() {
                console.log(x)
            };
        };
        for (let i = 0; i < Object.keys(posts).length; i++) {
            setInterval(f(posts[i]), 1000 * i);
        };
    }

    componentWillReceiveProps(nextProps) {
        console.log("this.props", this.props);
        console.log("nextProps", nextProps);
    }

    render() {
        let posts = this.props.posts;
        let permalink = Object.keys(posts).length > 0 ? posts[0].permalink : "";
        return (
            <div>
                {permalink}
            </div>
        );
    }
}
